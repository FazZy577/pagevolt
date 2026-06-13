import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Problem.css';

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="problem section" ref={ref}>
      <div className="problem-marquee">
        <div className="marquee-track">
          <span className="marquee-item">DISEÑO WEB</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">RESERVAS AUTOMÁTICAS</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">SEO LOCAL</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">ENTREGA EN 48H</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">NEGOCIOS LOCALES</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">DISEÑO A MEDIDA</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">DISEÑO WEB</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">RESERVAS AUTOMÁTICAS</span>
          <span className="marquee-dot">•</span>
          <span className="marquee-item">SEO LOCAL</span>
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
            Cada día sin una web profesional,<br />
            <span className="problem-title-accent">pierdes clientes</span>
          </h2>
          <p className="problem-text">
            El 87% de las personas busca online antes de visitar un negocio local.
            Si no apareces, no existes.
          </p>
        </motion.div>

        <motion.div
          className="problem-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="problem-stat-card">
            <div className="problem-stat-number">87%</div>
            <p className="problem-stat-text">busca online antes de visitar</p>
          </div>
          <div className="problem-stat-card">
            <div className="problem-stat-number">75%</div>
            <p className="problem-stat-text">juzga tu credibilidad por tu web</p>
          </div>
          <div className="problem-stat-card">
            <div className="problem-stat-number">60%</div>
            <p className="problem-stat-text">no contacta si la web es mala</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
