import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/LegalPages.css';

export default function Privacidad() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="legal-page">
      <Navbar />
      <div className="legal-container">
        <div className="legal-content">
          <h1>Política de Privacidad</h1>
          <p className="legal-updated">Última actualización: 14 de junio de 2026</p>

          <section>
            <h2>1. Información que Recopilamos</h2>
            <p>
              En Voltic recopilamos únicamente la información necesaria para proporcionar
              nuestros servicios de diseño web:
            </p>
            <ul>
              <li><strong>Datos de contacto:</strong> nombre, email y usuario de Instagram cuando nos contactas para solicitar un presupuesto o información.</li>
              <li><strong>Datos de pago:</strong> procesados exclusivamente a través de Stripe. No almacenamos datos de tarjetas de crédito ni información bancaria en nuestros servidores.</li>
              <li><strong>Información del proyecto:</strong> detalles sobre tu negocio necesarios para el desarrollo de tu página web.</li>
            </ul>
          </section>

          <section>
            <h2>2. Cómo Usamos tu Información</h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul>
              <li>Gestionar y desarrollar tu proyecto de diseño web</li>
              <li>Procesar pagos de forma segura a través de Stripe</li>
              <li>Comunicarnos contigo sobre el estado de tu proyecto</li>
              <li>Enviar recibos y confirmaciones de pago</li>
              <li>Mejorar nuestros servicios</li>
            </ul>
          </section>

          <section>
            <h2>3. Procesamiento de Pagos</h2>
            <p>
              Todos los pagos son procesados de forma segura a través de <strong>Stripe</strong>,
              una plataforma de pagos certificada PCI DSS Nivel 1. Los datos de tu tarjeta de
              crédito o débito no son almacenados en nuestros servidores y son manejados
              directamente por Stripe según su{' '}
              <a href="https://stripe.com/es/privacy" target="_blank" rel="noopener noreferrer">
                política de privacidad
              </a>.
            </p>
          </section>

          <section>
            <h2>4. Cookies y Tecnologías Similares</h2>
            <p>
              Nuestro sitio web utiliza cookies esenciales para su funcionamiento básico.
              No utilizamos cookies de seguimiento ni análisis de terceros. Las cookies
              que utilizamos son necesarias para:
            </p>
            <ul>
              <li>Mantener la sesión durante el proceso de pago</li>
              <li>Garantizar la seguridad del sitio</li>
              <li>Recordar tus preferencias básicas de navegación</li>
            </ul>
          </section>

          <section>
            <h2>5. Compartir tu Información</h2>
            <p>
              No vendemos, alquilamos ni compartimos tu información personal con terceros,
              excepto:
            </p>
            <ul>
              <li>Con Stripe para procesar pagos de forma segura</li>
              <li>Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
            </ul>
          </section>

          <section>
            <h2>6. Seguridad de los Datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger
              tu información personal contra acceso no autorizado, alteración, divulgación
              o destrucción. Toda la comunicación con nuestros servidores se realiza a
              través de conexiones HTTPS encriptadas.
            </p>
          </section>

          <section>
            <h2>7. Retención de Datos</h2>
            <p>
              Conservamos tu información personal únicamente durante el tiempo necesario
              para cumplir con los fines para los que fue recopilada, incluyendo requisitos
              legales, contables o de informes.
            </p>
          </section>

          <section>
            <h2>8. Tus Derechos</h2>
            <p>Tienes derecho a:</p>
            <ul>
              <li>Acceder a tu información personal</li>
              <li>Rectificar datos incorrectos o incompletos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al procesamiento de tu información</li>
              <li>Solicitar la portabilidad de tus datos</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, contacta con nosotros a través de
              Instagram: <strong>@Volt1c</strong>
            </p>
          </section>

          <section>
            <h2>9. Cambios en esta Política</h2>
            <p>
              Nos reservamos el derecho de actualizar esta política de privacidad en cualquier
              momento. Te notificaremos de cambios significativos publicando la nueva política
              en esta página y actualizando la fecha de "última actualización".
            </p>
          </section>

          <section>
            <h2>10. Contacto</h2>
            <p>
              Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos
              tu información personal, contáctanos:
            </p>
            <ul>
              <li>Instagram: <a href="https://ig.me/m/volt1c" target="_blank" rel="noopener noreferrer">@Volt1c</a></li>
              <li>Sitio web: pagevolt.es</li>
            </ul>
          </section>

          <section>
            <h2>11. Legislación Aplicable</h2>
            <p>
              Esta política de privacidad se rige por la legislación española y el Reglamento
              General de Protección de Datos (RGPD) de la Unión Europea.
            </p>
          </section>

          <div className="legal-back">
            <Link to="/" className="btn btn-primary">
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
