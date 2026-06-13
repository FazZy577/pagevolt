import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Services.css';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      number: "01",
      icon: "✦",
      title: "Desde cero",
      description: "No tienes web todavía. Perfecto — empezamos con una hoja en blanco y construimos algo hecho exactamente para ti y tus clientes.",
      tag: "Más popular",
      tagColor: "popular"
    },
    {
      number: "02",
      icon: "⟳",
      title: "Rediseño",
      description: "Tu web existe pero no convence. Analizamos qué falla y lo reconstruimos con un diseño moderno que refleje la calidad de tu negocio.",
      tag: "Rápido",
      tagColor: "fast"
    },
    {
      number: "03",
      icon: "◈",
      title: "Desde Instagram",
      description: "Tienes fotos, descripciones y clientes en Insta. Convertimos ese contenido en una web profesional sin que tengas que preparar nada.",
      tag: "Sin esfuerzo",
      tagColor: "easy"
    }
  ];

  return (
    <section id="servicios" className="services section" ref={ref}>
      <div className="container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="section-label">Lo que hago</span>
            <h2 className="section-title">Tres formas de<br />crear tu web</h2>
          </div>
          <p className="section-subtitle">
            Cada negocio es diferente. Por eso tengo tres puntos de partida distintos
            para llegar al mismo sitio: una web que trabaja por ti.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
            >
              <div className="service-number">{service.number}</div>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <span className={`service-tag service-tag-${service.tagColor}`}>
                {service.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
