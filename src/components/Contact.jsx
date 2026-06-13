import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="contact section">
      <div className="contact-bg">
        <div className="contact-gradient"></div>
      </div>

      <div className="container">
        <motion.div
          className="contact-content"
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Hablemos</span>

          <h2 className="contact-title">
            ¿Listo para tener una web<br />
            <span className="contact-title-accent">que funcione?</span>
          </h2>

          <p className="contact-subtitle">
            Cuéntame en qué consiste tu negocio y te respondo con una propuesta
            en menos de 24 horas.
          </p>

          <div className="contact-actions">
            <a
              href="https://instagram.com/pagevolt"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary contact-cta"
            >
              Escribirme por Instagram
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <a
              href="https://wa.me/34XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              WhatsApp
            </a>
          </div>

          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-icon">⚡</div>
              <div>
                <div className="contact-info-label">Respuesta</div>
                <div className="contact-info-value">Menos de 24h</div>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-icon">🌍</div>
              <div>
                <div className="contact-info-label">Modalidad</div>
                <div className="contact-info-value">100% remoto</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
