import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Layout,
  Palette,
  Search,
  Smartphone,
  Mail,
  CheckCircle
} from 'lucide-react';
import './Included.css';

export default function Included() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Layout,
      title: 'Diseño profesional',
      description: 'Diseño limpio, moderno y adaptado 100% a tu negocio y tu sector.'
    },
    {
      icon: Palette,
      title: 'Diseño 100% personalizado',
      description: 'Sin plantillas genéricas. Cada web se diseña desde cero para ti.'
    },
    {
      icon: Search,
      title: 'Optimizado para Google',
      description: 'Estructura y metadatos pensados para posicionar desde el primer día.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-first',
      description: 'Perfecto en móvil, tablet y escritorio. Donde sea que te busquen.'
    },
    {
      icon: Mail,
      title: 'Formularios y contacto',
      description: 'Puntos de contacto listos para que tus clientes te encuentren fácilmente.'
    },
    {
      icon: CheckCircle,
      title: 'Sin cuotas mensuales',
      description: 'Pago único. Tu web es tuya, sin mensualidades ni sorpresas.'
    }
  ];

  return (
    <section className="included section">
      <div className="container">
        <motion.div
          className="included-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Todo incluido</span>
          <h2 className="section-title">Todo lo que incluye tu web</h2>
          <p className="section-subtitle">
            Diseño, optimización y soporte. Sin sorpresas ni costes ocultos.
          </p>
        </motion.div>

        <div className="included-grid" ref={ref}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="included-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <div className="included-icon">
                  <IconComponent size={24} strokeWidth={2} />
                </div>
                <h3 className="included-title">{feature.title}</h3>
                <p className="included-description">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
