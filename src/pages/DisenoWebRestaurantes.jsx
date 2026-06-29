import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './DisenoWebRestaurantes.css';

export default function DisenoWebRestaurantes() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Diseño web para restaurantes y bares — Voltic';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Diseño web profesional para restaurantes, bares y cafeterías. Webs con reservas online, menú digital y galería de fotos. Entrega en 48h.');
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="landing-page">
        <section className="landing-hero">
          <div className="container">
            <h1>Diseño web para restaurantes y bares</h1>
            <p className="landing-subtitle">
              Webs profesionales que atraen más clientes y facilitan las reservas. Diseño moderno,
              menú digital incluido y optimización para Google. Entrega en 48 horas.
            </p>
            <a
              href="https://ig.me/m/volt1c"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Solicitar presupuesto gratis
            </a>
          </div>
        </section>

        <section className="landing-content">
          <div className="container">
            <article>
              <h2>Por qué tu restaurante necesita una web profesional</h2>
              <p>
                En 2026, más del 75% de clientes buscan restaurantes en Google antes de decidir
                dónde comer. Si tu negocio no aparece con una web profesional, pierdes esos clientes
                antes de que siquiera prueben tu comida. Una web bien diseñada no solo te hace visible
                online, también transmite confianza y calidad.
              </p>
              <p>
                Los restaurantes con web propia reciben más reservas, tienen mejor reputación online
                y pueden controlar su imagen de marca. A diferencia de depender solo de redes sociales
                o plataformas de terceros, tu web es tuya: sin comisiones por reserva, sin algoritmos
                que cambien las reglas del juego, y con toda la información que tus clientes necesitan
                para visitarte.
              </p>

              <h2>Qué incluye nuestra web para restaurantes</h2>
              <p>
                Cada web que diseñamos para restaurantes, bares y cafeterías está pensada para
                convertir visitas en clientes reales. Estos son los elementos que incluimos:
              </p>
              <ul>
                <li>
                  <strong>Reservas online integradas:</strong> tus clientes pueden reservar mesa
                  las 24 horas, incluso cuando tu restaurante está cerrado. Sistema simple y efectivo
                  que envía confirmaciones automáticas.
                </li>
                <li>
                  <strong>Menú digital:</strong> carta completa con fotos, descripciones, precios
                  y alérgenos. Fácil de actualizar cuando cambies los platos de temporada.
                </li>
                <li>
                  <strong>Galería de fotos profesional:</strong> muestra tus platos, el ambiente
                  de tu local y la experiencia que ofreces. Las fotos venden más que mil palabras.
                </li>
                <li>
                  <strong>Mapa de ubicación:</strong> integración con Google Maps para que tus
                  clientes lleguen sin perderse.
                </li>
                <li>
                  <strong>Horarios y contacto:</strong> información clara sobre cuándo estás
                  abierto, cómo contactarte y dónde encontrarte.
                </li>
                <li>
                  <strong>Optimización para móvil:</strong> más del 70% de búsquedas de
                  restaurantes son desde móvil. Tu web se verá perfecta en cualquier pantalla.
                </li>
                <li>
                  <strong>SEO básico:</strong> configuración técnica para que Google encuentre
                  tu restaurante cuando alguien busque "restaurante cerca de mí" o tu tipo de cocina.
                </li>
              </ul>

              <h2>Cómo trabajamos con restaurantes y bares</h2>
              <p>
                El proceso es simple y rápido. No necesitas conocimientos técnicos ni preparar
                documentos complicados. Así funciona:
              </p>
              <ol>
                <li>
                  <strong>Contacto inicial:</strong> me envías un mensaje por Instagram contándome
                  sobre tu restaurante, qué tipo de cocina ofreces y qué necesitas de la web.
                </li>
                <li>
                  <strong>Propuesta personalizada:</strong> en 24 horas te envío una propuesta
                  con precio cerrado y fecha de entrega. Sin sorpresas.
                </li>
                <li>
                  <strong>Pago inicial:</strong> pagas el 50% para arrancar el proyecto. Pago
                  seguro vía Stripe.
                </li>
                <li>
                  <strong>Diseño y revisiones:</strong> en 48 horas tienes el primer diseño listo.
                  Incluye 3 rondas de cambios para ajustar todo a tu gusto.
                </li>
                <li>
                  <strong>Entrega final:</strong> cuando apruebes el diseño, pagas el 50% restante
                  y tu web se publica. Lista para recibir reservas.
                </li>
              </ol>

              <h2>Precios para webs de restaurantes</h2>
              <p>
                Los precios varían según la complejidad del proyecto, pero trabajamos con presupuestos
                accesibles para negocios locales:
              </p>
              <ul>
                <li>
                  <strong>Web Esencial:</strong> desde 150€ — diseño básico con información del
                  restaurante, menú en PDF y formulario de contacto.
                </li>
                <li>
                  <strong>Web Completa:</strong> desde 250€ — diseño avanzado con menú digital
                  interactivo, galería de fotos y sistema de reservas online.
                </li>
                <li>
                  <strong>Web Premium:</strong> desde 300€ — todo lo anterior más integraciones
                  personalizadas, blog de recetas o sección de eventos.
                </li>
              </ul>
              <p>
                El pago es siempre 50% al inicio + 50% al entregar. Sin costes ocultos.
                El único gasto adicional es el hosting anual (10-15€/año).
              </p>

              <h2>Preguntas frecuentes sobre webs para restaurantes</h2>
              <h3>¿Puedo actualizar el menú yo mismo después?</h3>
              <p>
                Sí. Te dejo acceso a un panel simple donde puedes cambiar precios, añadir platos
                o actualizar fotos sin necesidad de programar nada.
              </p>

              <h3>¿La web aparecerá en Google?</h3>
              <p>
                Sí. Configuramos la web para que Google la indexe correctamente. También te doy
                recomendaciones para mejorar tu posicionamiento local (Google My Business, reseñas, etc).
              </p>

              <h3>¿Qué pasa si no me gusta el diseño?</h3>
              <p>
                Tienes 3 rondas de revisiones incluidas. Ajustamos colores, textos, distribución
                y todo lo que necesites hasta que estés satisfecho.
              </p>

              <div className="landing-cta-box">
                <h2>¿Listo para tener la web que tu restaurante merece?</h2>
                <p>
                  Escríbeme por Instagram y cuéntame sobre tu proyecto. Te respondo en menos de 24 horas
                  con una propuesta personalizada y precio cerrado.
                </p>
                <a
                  href="https://ig.me/m/volt1c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Contactar por Instagram
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
