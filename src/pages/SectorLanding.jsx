import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import './SectorLanding.css';

const sectorsData = {
  'restaurantes': {
    nombre: 'Restaurantes',
    titulo: 'Diseño web para restaurantes',
    descripcion: 'Convierte visitas en reservas con una web diseñada para atraer clientes hambrientos.',
    beneficios: [
      'Menú digital actualizable en cualquier momento',
      'Sistema de reservas online integrado',
      'Galería de fotos profesionales de tus platos',
      'Mapa interactivo y horarios siempre visibles',
      'Integración con redes sociales y reseñas',
      'Diseño que refleja la personalidad de tu local'
    ],
    textoIntro: 'Un restaurante sin web profesional pierde clientes cada día. Cuando alguien busca "restaurante cerca de mí" o el nombre de tu local, necesitas causar una primera impresión que dé hambre. Diseñamos webs para restaurantes que muestran tu carta de forma visual y apetecible, facilitan las reservas con un sistema automático, y transmiten la atmósfera de tu espacio antes de que el cliente cruce la puerta. Tu carta actualizada en tiempo real, fotos de tus platos estrella, reseñas de clientes satisfechos y un mapa para llegar sin perderse. Todo optimizado para móvil, porque el 80% de tus futuros clientes te buscan desde el teléfono mientras deciden dónde comer.'
  },
  'cafeterias': {
    nombre: 'Cafeterías y bares',
    titulo: 'Diseño web para cafeterías y bares',
    descripcion: 'Una web que refleja el ambiente de tu local y atrae clientes en cualquier momento del día.',
    beneficios: [
      'Carta de bebidas y tapas siempre actualizada',
      'Horarios especiales y eventos destacados',
      'Galería visual de tu espacio y ambiente',
      'Promociones y happy hours visibles',
      'Integración con Instagram y redes sociales',
      'Información de contacto y ubicación clara'
    ],
    textoIntro: 'Las cafeterías y bares viven del paso de clientes y del boca a boca digital. Cuando alguien busca "cafetería con wifi" o "bar para vermut", tu web debe transmitir la esencia de tu local: si eres un espacio acogedor para trabajar, un bar de copas con ambiente, o una cafetería de especialidad. Creamos webs que muestran tus mejores ángulos, destacan tus especialidades (ese café de filtro, esas croquetas caseras), y facilitan que te encuentren en Google Maps. Incluimos sección para eventos, promociones semanales, y un diseño que refleja si eres un local moderno, clásico, o alternativo. Porque cada cafetería tiene personalidad, y tu web debe mostrarla.'
  },
  'peluquerias': {
    nombre: 'Peluquerías y barberías',
    titulo: 'Diseño web para peluquerías y barberías',
    descripcion: 'Tu trabajo habla por sí solo. Una web que muestra tu estilo y facilita las reservas.',
    beneficios: [
      'Sistema de citas online 24/7',
      'Galería de trabajos realizados (antes/después)',
      'Descripción de servicios y precios',
      'Perfiles del equipo de estilistas',
      'Notificaciones automáticas de citas',
      'Integración con Instagram para mostrar tu trabajo'
    ],
    textoIntro: 'El 70% de las personas buscan peluquerías online antes de pedir cita. Si no tienes web profesional, estás perdiendo clientes frente a competidores que sí la tienen. Diseñamos webs para peluquerías y barberías que destacan tu trabajo con galerías de antes/después, permiten reservar cita online sin llamadas telefónicas, y explican claramente tus servicios y tarifas. Un sistema de reservas que se sincroniza con tu calendario, recordatorios automáticos para reducir las ausencias, y un diseño visual que refleja tu estilo: moderno, clásico, urbano o vanguardista. Tu web trabajando para ti mientras tú trabajas con tus clientes.'
  },
  'clinicas': {
    nombre: 'Clínicas y centros de salud',
    titulo: 'Diseño web para clínicas y centros de salud',
    descripcion: 'Genera confianza profesional y facilita las citas con una web clara y accesible.',
    beneficios: [
      'Sistema de citas médicas online',
      'Información de servicios y especialidades',
      'Perfiles del equipo médico con credenciales',
      'Sección de preguntas frecuentes',
      'Acceso a resultados y documentación (opcional)',
      'Diseño profesional que transmite confianza'
    ],
    textoIntro: 'Los pacientes buscan profesionalidad, claridad y confianza antes de elegir un centro de salud. Tu web es tu primera consulta: debe responder dudas, mostrar tu equipo médico, explicar tus servicios y facilitar la reserva de citas sin esperas telefónicas. Diseñamos webs para clínicas, consultorios, y centros de salud que cumplen con estándares de accesibilidad, tienen un diseño limpio y profesional, y estructuran la información de forma clara. Sistema de citas que reduce la carga administrativa, sección de especialidades bien explicada, y un diseño que transmite seriedad sin perder cercanía. Compatible con normativa de protección de datos sanitarios.'
  },
  'comercios': {
    nombre: 'Tiendas y comercios',
    titulo: 'Diseño web para tiendas y comercios locales',
    descripcion: 'Lleva tu tienda física al mundo digital y atrae más clientes a tu local.',
    beneficios: [
      'Catálogo visual de productos destacados',
      'Horarios, ubicación y formas de contacto',
      'Promociones y ofertas actualizables',
      'Integración con redes sociales',
      'Diseño adaptado a tu identidad de marca',
      'Opción de consultas y pedidos online'
    ],
    textoIntro: 'Las tiendas físicas compiten contra grandes superficies y comercio online, pero tienen una ventaja: cercanía y trato personal. Tu web debe reforzar eso mostrando qué te hace especial, qué productos destacas, y por qué merece la pena visitarte. Diseñamos webs para comercios locales que funcionan como escaparate digital: muestran tus productos estrella, promociones de temporada, y facilitan el contacto para consultas. Si vendes ropa, decoración, alimentación especializada, o cualquier producto físico, tu web debe hacer que la gente quiera visitarte. Optimizada para búsquedas locales tipo "tienda de X en [ciudad]", con diseño visual coherente con tu marca.'
  },
  'gimnasios': {
    nombre: 'Gimnasios y centros deportivos',
    titulo: 'Diseño web para gimnasios y centros deportivos',
    descripcion: 'Motiva a nuevos socios a unirse con una web dinámica que muestra tu equipamiento y clases.',
    beneficios: [
      'Horarios de clases y actividades',
      'Sistema de reserva de clases grupales',
      'Información de tarifas y planes',
      'Galería del equipamiento e instalaciones',
      'Perfiles de entrenadores y especialistas',
      'Promociones para nuevos socios'
    ],
    textoIntro: 'Un gimnasio o centro deportivo vende motivación, resultados y comunidad antes que equipamiento. Tu web debe transmitir energía, mostrar tus instalaciones, y facilitar que nuevos socios se unan sin fricción. Diseñamos webs para gimnasios que destacan tus clases dirigidas, muestran tu equipamiento en fotos reales, y permiten reservar clases online. Sistema de horarios actualizado, perfiles de entrenadores con sus especialidades, y diseños visuales que inspiran acción. Si ofreces yoga, crossfit, musculación, o actividades grupales, tu web debe reflejar esa energía. Optimizada para búsquedas de "gimnasio cerca" y compatible con sistemas de gestión de socios.'
  },
  'inmobiliarias': {
    nombre: 'Inmobiliarias',
    titulo: 'Diseño web para inmobiliarias',
    descripcion: 'Muestra tu cartera de propiedades con una web profesional que genera confianza.',
    beneficios: [
      'Galería de propiedades con filtros de búsqueda',
      'Fichas detalladas de cada inmueble',
      'Formularios de contacto por propiedad',
      'Integración con portales inmobiliarios',
      'Sección de servicios (venta, alquiler, gestión)',
      'Diseño profesional que transmite confianza'
    ],
    textoIntro: 'Las inmobiliarias venden sueños y toman decisiones importantes. Tu web debe ser tu mejor comercial: mostrar propiedades con fotos de calidad, filtros de búsqueda intuitivos, y facilitar el contacto inmediato. Diseñamos webs para agencias inmobiliarias que destacan tu cartera de inmuebles, explican tus servicios (venta, alquiler, gestión), y generan confianza con diseño profesional. Sistema de fichas de propiedades actualizable, formularios de contacto por inmueble, integración con portales como Idealista o Fotocasa, y diseño que transmite seriedad. Si vendes pisos, casas, locales o terrenos, tu web debe hacer que cada propiedad brille y que los clientes confíen en ti.'
  },
  'academias': {
    nombre: 'Academias y centros de formación',
    titulo: 'Diseño web para academias y centros de formación',
    descripcion: 'Atrae más alumnos con una web clara que muestra tu oferta formativa y facilita las matrículas.',
    beneficios: [
      'Catálogo de cursos y programas formativos',
      'Horarios, modalidades y precios claros',
      'Sistema de inscripción online',
      'Perfiles de profesores y metodología',
      'Testimonios de alumnos anteriores',
      'Blog educativo para atraer tráfico orgánico'
    ],
    textoIntro: 'Las academias y centros de formación compiten por alumnos que comparan opciones online antes de decidir. Tu web debe explicar claramente qué enseñas, cómo lo haces, quién imparte las clases, y por qué eres la mejor opción. Diseñamos webs para academias de idiomas, refuerzo escolar, oposiciones, formación profesional, y cualquier centro educativo. Catálogo de cursos con descripciones detalladas, horarios y modalidades (presencial, online, híbrido), sistema de inscripción sin papeleos, y perfiles de profesores que generan confianza. Si preparas oposiciones, enseñas idiomas, o impartes formación especializada, tu web debe convertir visitas en matrículas.'
  },
  'fotografos': {
    nombre: 'Fotógrafos y creativos',
    titulo: 'Diseño web para fotógrafos y creativos',
    descripcion: 'Tu portfolio merece una web que haga justicia a tu trabajo visual.',
    beneficios: [
      'Portfolio visual optimizado para carga rápida',
      'Galerías organizadas por tipo de proyecto',
      'Información de servicios y tarifas',
      'Formulario de contacto para presupuestos',
      'Integración con Instagram y redes sociales',
      'Diseño minimalista que destaca tus imágenes'
    ],
    textoIntro: 'Fotógrafos, videógrafos, diseñadores e ilustradores venden con la vista antes que con palabras. Tu web debe ser un portfolio visual donde tu trabajo hable por sí solo, sin distracciones ni diseños recargados. Creamos webs para creativos que priorizan la imagen: carga rápida incluso con fotos de alta resolución, galerías organizadas por categorías (bodas, eventos, producto, retrato), y diseño minimalista que no compite con tu trabajo. Sistema de contacto para presupuestos, integración con Instagram, y estructura pensada para que los clientes pasen de "me gusta su trabajo" a "quiero contratarle" en segundos. Si vives de tu creatividad, tu web es tu mejor carta de presentación.'
  },
  'negocios-locales': {
    nombre: 'Negocios locales',
    titulo: 'Diseño web para negocios locales',
    descripcion: 'Tu negocio merece presencia online profesional, sea cual sea tu sector.',
    beneficios: [
      'Diseño adaptado a tu tipo de negocio',
      'Información de servicios o productos',
      'Horarios, ubicación y contacto',
      'Formulario para consultas y presupuestos',
      'Integración con Google Maps',
      'Optimización para búsquedas locales'
    ],
    textoIntro: 'Si tienes un negocio local que no encaja en categorías típicas (talleres, consultorías, servicios profesionales, pequeño comercio especializado), tu web sigue siendo esencial. El 90% de consumidores busca online antes de visitar un negocio local, y no tener web profesional te hace invisible. Diseñamos webs para cualquier tipo de negocio que necesite presencia digital: explicamos tu propuesta de valor, mostramos tus servicios o productos, facilitamos el contacto, y te posicionamos en búsquedas locales. Adaptamos el diseño a tu sector y estilo de marca, priorizamos información clave (qué haces, para quién, cómo contactarte), y creamos una web que convierta visitas en clientes reales. Pago único, sin mensualidades, para que tu negocio crezca sin ataduras.'
  }
};

export default function SectorLanding() {
  const { sector } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sector]);

  useEffect(() => {
    if (sector && sectorsData[sector]) {
      document.title = `${sectorsData[sector].titulo} | Voltted - Diseño Web`;
    } else {
      document.title = 'Voltted - Diseño Web para Negocios Locales';
    }

    return () => {
      document.title = 'Voltted - Diseño Web para Negocios Locales';
    };
  }, [sector]);

  const sectorData = sectorsData[sector];

  if (!sectorData) {
    return (
      <>
        <CustomCursor />
        <Navbar />
        <section className="sector-not-found section">
          <div className="container">
            <h1>Sector no encontrado</h1>
            <p>El sector que buscas no existe en nuestro catálogo.</p>
            <a href="/" className="btn btn-primary">Volver al inicio</a>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <CustomCursor />
      <Navbar />

      <section className="sector-hero section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Diseño Web Especializado</span>
            <h1 className="sector-title">{sectorData.titulo}</h1>
            <p className="sector-description">{sectorData.descripcion}</p>
            <div className="sector-cta">
              <a href="https://ig.me/m/volt1c" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Hablemos de tu proyecto
              </a>
              <a href="#precios" className="btn btn-secondary">
                Ver precios
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="sector-benefits section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="section-title">Qué incluye tu web</h2>
            <ul className="benefits-list">
              {sectorData.beneficios.map((beneficio, index) => (
                <motion.li
                  key={index}
                  className="benefit-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <Check className="benefit-icon" size={20} strokeWidth={2.5} />
                  <span>{beneficio}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="sector-intro section">
        <div className="container">
          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="section-title">Por qué necesitas una web profesional</h2>
            <p className="intro-text">{sectorData.textoIntro}</p>
          </motion.div>
        </div>
      </section>

      <section id="precios" className="sector-pricing section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="section-title">Precios transparentes</h2>
            <p className="section-subtitle">
              Pago único. Sin cuotas mensuales. Tu web es tuya para siempre.
            </p>

            <div className="pricing-simple">
              <div className="pricing-simple-card">
                <div className="pricing-simple-label">Web Esencial</div>
                <div className="pricing-simple-price">
                  <span className="pricing-simple-currency">€</span>99
                </div>
                <p className="pricing-simple-description">Perfecto para empezar. Diseño profesional y adaptado a móvil.</p>
                <a href="https://ig.me/m/volt1c" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Consultar
                </a>
              </div>

              <div className="pricing-simple-card pricing-simple-featured">
                <div className="pricing-badge">Recomendado</div>
                <div className="pricing-simple-label">Web + Reservas</div>
                <div className="pricing-simple-price">
                  <span className="pricing-simple-currency">€</span>249
                </div>
                <p className="pricing-simple-description">Todo lo anterior + sistema de reservas automático integrado.</p>
                <a href="https://ig.me/m/volt1c" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Empezar ahora
                </a>
              </div>

              <div className="pricing-simple-card">
                <div className="pricing-simple-label">Rediseño</div>
                <div className="pricing-simple-price">
                  <span className="pricing-simple-currency">€</span>149
                </div>
                <p className="pricing-simple-description">¿Ya tienes web? La mejoramos completamente.</p>
                <a href="https://ig.me/m/volt1c" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Consultar
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="sector-final-cta section">
        <div className="container">
          <motion.div
            className="final-cta-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="section-title">¿Tienes {sectorData.nombre.toLowerCase()}? Hablemos</h2>
            <p className="section-subtitle">
              Diseño en 72 horas. Pago 50%+50%. Sin cuotas mensuales.
            </p>
            <a href="https://ig.me/m/volt1c" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
              Contactar por Instagram
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
