import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Navbar from './Navbar';
import paymentCodesData from '../data/payment-codes-active.json';
import './Payment.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function CheckoutForm({ paymentData, onSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setProcessing(true);
    setError(null);

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/pago/confirmacion`,
      },
    });

    if (submitError) {
      setError(submitError.message);
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <div className="payment-summary">
        <div className="payment-summary-row">
          <span>Cliente</span>
          <span className="payment-summary-value">{paymentData.clientName}</span>
        </div>
        <div className="payment-summary-row">
          <span>Tipo de pago</span>
          <span className="payment-summary-value">{paymentData.paymentType}</span>
        </div>
        <div className="payment-summary-row payment-summary-total">
          <span>Total a pagar</span>
          <span className="payment-summary-price">€{paymentData.amount}</span>
        </div>
      </div>

      <div className="payment-element-wrapper">
        <PaymentElement />
      </div>

      {error && (
        <div className="payment-error">
          <span>⚠</span>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="btn btn-primary payment-submit"
      >
        {processing ? 'Procesando...' : `Pagar €${paymentData.amount}`}
      </button>

      <div className="payment-secure">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1L3 3V7C3 10.5 5.5 13.5 8 15C10.5 13.5 13 10.5 13 7V3L8 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Pago seguro encriptado con Stripe
      </div>
    </form>
  );
}

export default function Payment() {
  const [step, setStep] = useState('code'); // 'code', 'payment', 'success'
  const [code, setCode] = useState('');
  const [paymentData, setPaymentData] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const validateCode = async () => {
    if (!code.trim()) {
      setError('Por favor introduce un código');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Validar código en el frontend
      const paymentCode = paymentCodesData.codes.find(
        c => c.code === code.trim().toUpperCase() && c.status === 'active'
      );

      if (!paymentCode) {
        setError('Código no válido o ya utilizado');
        setLoading(false);
        return;
      }

      // Crear PaymentIntent en el backend
      const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: paymentCode.amount,
          code: paymentCode.code,
          clientName: paymentCode.clientName,
          description: paymentCode.description,
          email: paymentCode.email
        })
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Error al procesar');
        setLoading(false);
        return;
      }

      setPaymentData({
        clientName: paymentCode.clientName,
        amount: paymentCode.amount,
        paymentType: paymentCode.paymentType,
        description: paymentCode.description
      });
      setClientSecret(data.clientSecret);
      setStep('payment');
    } catch (err) {
      setError('Error al conectar. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !loading) {
      validateCode();
    }
  };

  return (
    <div className="payment-page">
      <Navbar />
      <div className="payment-container">
        <motion.div
          className="payment-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="payment-logo">
            <h1>Volt<span>ix</span></h1>
          </div>

          {step === 'code' && (
            <>
              <div className="payment-header">
                <h2>Procesar pago</h2>
                <p>Introduce el código único que has recibido</p>
              </div>

              <div className="payment-code-section">
                <div className="payment-input-group">
                  <label htmlFor="code">Código de pago</label>
                  <input
                    id="code"
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    onKeyPress={handleKeyPress}
                    placeholder="PV-XXXXX-XXXXX"
                    className="payment-input"
                    disabled={loading}
                    autoFocus
                  />
                </div>

                {error && (
                  <div className="payment-error">
                    <span>⚠</span>
                    {error}
                  </div>
                )}

                <button
                  onClick={validateCode}
                  disabled={loading || !code.trim()}
                  className="btn btn-primary payment-validate-btn"
                >
                  {loading ? 'Validando...' : 'Continuar al pago'}
                </button>

                <div className="payment-help">
                  <p>¿No tienes un código?</p>
                  <a
                    href="https://ig.me/m/_pagevolt_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="payment-help-link"
                  >
                    Contacta con nosotros
                  </a>
                </div>
              </div>
            </>
          )}

          {step === 'payment' && clientSecret && (
            <>
              <button
                onClick={() => setStep('code')}
                className="payment-back"
              >
                ← Volver
              </button>

              <div className="payment-header">
                <h2>Completar pago</h2>
                <p>Datos de tu tarjeta protegidos y encriptados</p>
              </div>

              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm
                  paymentData={paymentData}
                  onSuccess={() => setStep('success')}
                />
              </Elements>
            </>
          )}
        </motion.div>

        <div className="payment-features">
          <div className="payment-feature">
            <div className="payment-feature-icon">🔒</div>
            <div className="payment-feature-text">
              <h4>Pago seguro</h4>
              <p>Encriptación SSL y cumplimiento PCI</p>
            </div>
          </div>
          <div className="payment-feature">
            <div className="payment-feature-icon">💳</div>
            <div className="payment-feature-text">
              <h4>Todas las tarjetas</h4>
              <p>Visa, Mastercard, Amex y más</p>
            </div>
          </div>
          <div className="payment-feature">
            <div className="payment-feature-icon">✓</div>
            <div className="payment-feature-text">
              <h4>Confirmación instantánea</h4>
              <p>Recibirás tu recibo por email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
