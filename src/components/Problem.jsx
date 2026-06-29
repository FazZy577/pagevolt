import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Problem.css';

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const marqueeItems = [
    "WEBS QUE CONVIERTEN",
    "DISEÑO A MEDIDA",
    "SEO OPTIMIZADO",
    "CARGA ULTRARRÁPIDA",
    "EXPERIENCIA PREMIUM"
  ];

  const problems = [
    {
      title: "Sin presencia online",
      description: "Si no apareces en Google, no existes para el 80% de tus clientes potenciales. La mayoría de personas buscan negocios locales online antes de visitarlos. Sin una web profesional, pierdes esos clientes antes de que siquiera conozcan tu negocio."
    },
    {
      title: "Primera impresión horrible",
      description: "Una web anticuada transmite desconfianza y hace que el cliente se vaya a la competencia en segundos. El diseño de tu web comunica la calidad de tu servicio. Si tu web parece de hace 10 años, los clientes asumen que tu negocio también lo es."
    },
    {
      title: "Sin reservas automáticas",
      description: "Pierdes clientes fuera de tu horario porque no tienen forma de contactarte fácilmente. Las reservas online permiten que tus clientes agenden citas, reserven mesas o soliciten servicios las 24 horas del día, incluso cuando tu negocio está cerrado."
    },
    {
      title: "Diseño no adaptado a móvil",
      description: "El 70% de búsquedas son desde el móvil. Si tu web no se ve bien en móvil, pierdes esos clientes directamente. Google penaliza webs que no funcionan en móvil, y los usuarios abandonan inmediatamente si tienen que hacer zoom para leer tu contenido."
    }
  ];

  return (
    <section className="problem section" ref={ref}>
      <div className="problem-marquee">
        <div className="slide-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="slide">
              <span className="marquee-item">{item}</span>
              {index < marqueeItems.length * 2 - 1 && <span className="marquee-dot">•</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          className="problem-content"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="problem-title">
            La mayoría de negocios locales<br />
            <span className="problem-title-accent">pierden clientes cada día</span>
          </h2>
          <p className="problem-text">
            Tener una web mala es peor que no tenerla. Los clientes juzgan tu negocio en 3 segundos.
          </p>
        </motion.div>

        <motion.div
          className="problem-cards"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="problem-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <h3 className="problem-card-title">{problem.title}</h3>
              <p className="problem-card-text">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="problem-final"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="problem-final-text">
            Tu web debería traerte clientes, no espantarlos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
