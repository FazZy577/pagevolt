import { motion } from 'framer-motion';
import HeroParticles from './HeroParticles';
import './Hero.css';

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <HeroParticles />
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Disponible ahora · Trabajo en remoto
          </div>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Tu negocio merece<br />
          una web <span className="hero-title-accent">que funcione</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Diseño webs para negocios locales que <strong>atraen clientes de verdad</strong>.
          Bonitas, rápidas y con reservas automáticas incluidas — sin complicaciones.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#contacto" className="btn btn-primary">
            Quiero mi web
            <svg className="hero-cta-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#precios" className="btn btn-ghost">
            Ver precios →
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="hero-stat">
            <div className="hero-stat-number">3<span>+</span></div>
            <div className="hero-stat-label">Tipos de servicio</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">48<span>h</span></div>
            <div className="hero-stat-label">Diseño inicial</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-number">100<span>%</span></div>
            <div className="hero-stat-label">Personalizado</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
