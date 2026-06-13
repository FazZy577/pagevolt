import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Portfolio.css';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const demos = [
    {
      type: "Hostelería",
      title: "Cafetería moderna",
      description: "Web con carta, reservas online y notificaciones automáticas al propietario.",
      color: "#ff9f2f",
      gradient: "rgba(255, 160, 50, 0.1)"
    },
    {
      type: "Belleza & Estética",
      title: "Barbería premium",
      description: "Sistema de citas online, carta de servicios y galería de trabajos.",
      color: "#dc2626",
      gradient: "rgba(220, 40, 40, 0.08)"
    },
    {
      type: "Restauración",
      title: "Restaurante local",
      description: "Diseño elegante con carta digital, reservas y mapa de ubicación.",
      color: "#b48c50",
      gradient: "rgba(180, 140, 80, 0.15)"
    },
    {
      type: "Salud & Bienestar",
      title: "Centro de estética",
      description: "Carta de tratamientos, citas online y galería de resultados.",
      color: "#c084fc",
      gradient: "rgba(180, 100, 255, 0.08)"
    }
  ];

  return (
    <section id="demos" className="portfolio section">
      <div className="container">
        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Ejemplos de lo que creo</h2>
          <p className="portfolio-note">Demos conceptuales creadas para mostrar estilos posibles</p>
        </motion.div>

        <div className="portfolio-grid" ref={ref}>
          {demos.map((demo, index) => (
            <motion.div
              key={index}
              className="portfolio-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="portfolio-card-preview">
                <div className="portfolio-card-overlay"></div>
                {/* IMAGEN REQUERIDA para cada demo:
                    Descripción: Mockup de sitio web en navegador o dispositivo móvil
                    mostrando una web de {demo.type} con diseño moderno y profesional
                    Tamaño: 800x600px
                    Formato: JPG o WebP optimizado
                    Estilo: Screenshot real o mockup 3D de alta calidad
                    Prompt para IA: "website mockup for {demo.title}, modern design,
                    clean interface, shown in browser or mobile device, professional
                    photography, high quality render"
                */}
                <div
                  className="portfolio-placeholder"
                  style={{
                    background: `radial-gradient(ellipse 60% 60% at 50% 40%, ${demo.gradient}, var(--color-bg))`
                  }}
                >
                  <div className="portfolio-placeholder-icon" style={{ color: demo.color }}>
                    ◈
                  </div>
                  <div className="portfolio-placeholder-text">
                    Demo: {demo.title}
                  </div>
                </div>
              </div>
              <div className="portfolio-card-info">
                <div className="portfolio-card-type" style={{ color: demo.color }}>
                  {demo.type}
                </div>
                <h3 className="portfolio-card-title">{demo.title}</h3>
                <p className="portfolio-card-description">{demo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
