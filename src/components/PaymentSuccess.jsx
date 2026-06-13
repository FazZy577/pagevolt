import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import './PaymentSuccess.css';

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('loading');
  const paymentIntent = searchParams.get('payment_intent');

  useEffect(() => {
    if (paymentIntent) {
      // Verificar el estado del pago
      fetch(`/.netlify/functions/verify-payment?payment_intent=${paymentIntent}`)
        .then(res => res.json())
        .then(data => {
          setStatus(data.status === 'succeeded' ? 'success' : 'failed');
        })
        .catch(() => setStatus('failed'));
    } else {
      setStatus('failed');
    }
  }, [paymentIntent]);

  return (
    <div className="payment-success-page">
      <div className="payment-success-container">
        <motion.div
          className="payment-success-content"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {status === 'loading' && (
            <>
              <div className="payment-success-loader"></div>
              <h2>Verificando pago...</h2>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="payment-success-icon">✓</div>
              <h2>¡Pago completado!</h2>
              <p className="payment-success-message">
                Tu pago se ha procesado correctamente. Recibirás un recibo por email en breve.
              </p>
              <div className="payment-success-next">
                <h3>¿Qué sigue?</h3>
                <ul>
                  <li>📧 Recibirás un email de confirmación</li>
                  <li>🚀 Comenzaremos a trabajar en tu proyecto</li>
                  <li>💬 Te contactaremos por Instagram para coordinar</li>
                </ul>
              </div>
              <Link to="/" className="btn btn-primary">
                Volver al inicio
              </Link>
            </>
          )}

          {status === 'failed' && (
            <>
              <div className="payment-success-icon payment-error-icon">✕</div>
              <h2>Error en el pago</h2>
              <p className="payment-success-message">
                Hubo un problema al procesar tu pago. Por favor, inténtalo de nuevo o contáctanos.
              </p>
              <div className="payment-success-actions">
                <Link to="/pago" className="btn btn-primary">
                  Intentar de nuevo
                </Link>
                <Link to="/#contacto" className="btn btn-secondary">
                  Contactar soporte
                </Link>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
