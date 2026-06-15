import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Problem.css';

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      title: "Sin presencia online",
      description: "Si no apareces en Google, no existes para el 80% de tus clientes potenciales"
    },
    {
      title: "Primera impresión horrible",
      description: "Una web anticuada transmite desconfianza y hace que el cliente se vaya a la competencia"
    },
    {
      title: "Sin reservas automáticas",
      description: "Pierdes clientes fuera de tu horario porque no tienen forma de contactarte fácilmente"
    },
    {
      title: "Diseño no adaptado a móvil",
      description: "El 70% de búsquedas son desde el móvil. Si tu web no se ve bien en móvil, pierdes esos clientes"
    }
  ];

  return (
    <section className="problem section" ref={ref}>
      <div className="problem-marquee">
        <div className="marquee-track">
          <span className="marquee-item">DISEÑO WEB</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">TRABAJO EN REMOTO</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">CUALQUIER PAÍS</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">ENTREGA EN 48H</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">DISEÑO A MEDIDA</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">PAGO SEGURO</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">RESERVAS AUTOMÁTICAS</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">100% ONLINE</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">DISEÑO WEB</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">TRABAJO EN REMOTO</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">CUALQUIER PAÍS</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">ENTREGA EN 48H</span>
          <span className="marquee-dot">•</span>
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
