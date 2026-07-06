import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './DisenoWebRestaurantes.css';

export default function DisenoWebNegociosLocales() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Diseño web para negocios locales — Voltted';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Diseño web profesional para negocios locales: peluquerías, clínicas, fontaneros, comercios. Webs rápidas que atraen clientes. Entrega en 72h.');
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="landing-page">
        <section className="landing-hero">
          <div className="container">
            <h1>Diseño web para negocios locales</h1>
            <p className="landing-subtitle">
              Webs profesionales para pequeños negocios que necesitan presencia online.
              Diseño moderno, formularios de contacto y optimización para Google. Entrega en 72 horas.
            </p>
            <a
              href="https://ig.me/m/voltted_"
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
              <h2>Qué negocios locales atendemos</h2>
              <p>
                Trabajamos con todo tipo de negocios locales que necesitan una presencia online profesional
                para atraer más clientes. Estos son algunos de los sectores con los que trabajamos habitualmente:
              </p>
              <ul>
                <li><strong>Restaurantes, bares y cafeterías:</strong> webs con menú digital, reservas online y galería de fotos.</li>
                <li><strong>Peluquerías y centros de estética:</strong> catálogo de servicios, galería de antes/después y sistema de citas.</li>
                <li><strong>Clínicas y consultas médicas:</strong> información de servicios, equipo profesional y formulario de contacto.</li>
                <li><strong>Fontaneros, electricistas y servicios técnicos:</strong> descripción de servicios, zonas de cobertura y contacto directo.</li>
                <li><strong>Tiendas y comercios locales:</strong> catálogo de productos, horarios, ubicación y métodos de contacto.</li>
                <li><strong>Gimnasios y centros deportivos:</strong> clases disponibles, horarios, precios y reservas de plaza.</li>
                <li><strong>Talleres mecánicos y lavaderos:</strong> servicios ofrecidos, precios orientativos y sistema de citas.</li>
              </ul>
              <p>
                Si tienes un negocio local y necesitas atraer clientes por internet, podemos ayudarte independientemente
                del sector. Lo importante es entender tu negocio y crear una web que realmente convierta visitas en clientes.
              </p>

              <h2>Por qué una web profesional cambia tu negocio local</h2>
              <p>
                En 2026, el 80% de personas buscan negocios locales en Google antes de tomar una decisión.
                Si tu negocio no aparece con una web profesional, pierdes esos clientes sin siquiera saberlo.
                Una web bien diseñada no es un gasto, es una inversión que se recupera con los primeros clientes que lleguen por internet.
              </p>
              <p>
                Los negocios locales con web propia tienen ventajas claras frente a su competencia:
              </p>
              <ul>
                <li>Aparecen en Google cuando alguien busca sus servicios en la zona.</li>
                <li>Transmiten profesionalidad y confianza desde el primer momento.</li>
                <li>Pueden recibir consultas y solicitudes de presupuesto las 24 horas del día.</li>
                <li>Controlan su imagen de marca sin depender de plataformas de terceros.</li>
                <li>Pueden mostrar su trabajo con galerías de fotos y testimonios de clientes.</li>
              </ul>
              <p>
                Una web profesional es tu comercial trabajando 24/7. Mientras duermes, tu web está mostrando
                tus servicios a clientes potenciales que buscan exactamente lo que ofreces.
              </p>

              <h2>Diferencias con hacerlo tú mismo en Wix o Squarespace</h2>
              <p>
                Es cierto que existen plataformas como Wix, Squarespace o Wordpress.com que permiten crear webs
                sin saber programar. Pero hay diferencias importantes con contratar un diseñador web profesional:
              </p>
              <ul>
                <li>
                  <strong>Ahorro de tiempo:</strong> crear una web profesional desde cero lleva semanas si no tienes
                  experiencia. Nosotros te entregamos algo funcional en 72 horas para que puedas centrarte en tu negocio.
                </li>
                <li>
                  <strong>Diseño a medida:</strong> las plantillas prediseñadas son genéricas y muchos negocios
                  tienen exactamente la misma web. Nosotros diseñamos algo único que refleja tu marca.
                </li>
                <li>
                  <strong>Optimización técnica:</strong> velocidad de carga, SEO, adaptación a móvil, seguridad...
                  son detalles técnicos que requieren conocimiento. Nosotros nos encargamos de todo eso.
                </li>
                <li>
                  <strong>Soporte incluido:</strong> si algo falla o necesitas un cambio, estamos aquí. Con plataformas
                  DIY estás solo frente a cualquier problema técnico.
                </li>
              </ul>
              <p>
                Si tienes tiempo, ganas de aprender y presupuesto muy ajustado, las plataformas DIY pueden funcionar.
                Pero si valoras tu tiempo y quieres un resultado profesional desde el día uno, contratar un diseñador
                es la mejor inversión.
              </p>

              <h2>Proceso rápido y sin complicaciones</h2>
              <p>
                No necesitas conocimientos técnicos ni preparar documentación compleja. El proceso es simple:
              </p>
              <ol>
                <li>
                  <strong>Primer contacto:</strong> me envías un mensaje por Instagram contándome sobre tu negocio
                  y qué necesitas de la web.
                </li>
                <li>
                  <strong>Propuesta personalizada:</strong> en 24 horas te envío presupuesto cerrado y fecha de entrega.
                  Sin sorpresas ni letra pequeña.
                </li>
                <li>
                  <strong>Pago inicial (50%):</strong> pagas la mitad para arrancar el diseño. Pago seguro vía Stripe.
                </li>
                <li>
                  <strong>Diseño y revisiones:</strong> en 72 horas tienes el primer diseño. Incluye hasta 3 rondas
                  de cambios para ajustar todo.
                </li>
                <li>
                  <strong>Entrega final:</strong> cuando apruebes el diseño, pagas el 50% restante y tu web se publica.
                  Lista para atraer clientes.
                </li>
              </ol>

              <div className="landing-cta-box">
                <h2>¿Listo para llevar tu negocio local a internet?</h2>
                <p>
                  Escríbeme por Instagram y cuéntame sobre tu proyecto. Te respondo en menos de 24 horas
                  con una propuesta personalizada y precio cerrado. Sin compromiso.
                </p>
                <a
                  href="https://ig.me/m/voltted_"
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
