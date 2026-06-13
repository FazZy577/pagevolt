import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Pricing.css';

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      label: "Básico",
      name: "Web Esencial",
      price: "99",
      description: "pago único · sin mensualidades",
      features: [
        "Diseño a medida",
        "Hasta 5 secciones",
        "Adaptada a móvil",
        "Formulario de contacto",
        "2 revisiones incluidas"
      ],
      featured: false
    },
    {
      label: "Completo",
      name: "Web + Reservas",
      price: "249",
      description: "pago único · sin mensualidades",
      features: [
        "Todo lo del básico",
        "Sistema de reservas automático",
        "Notificaciones en tiempo real",
        "Sincronización con Google Calendar",
        "Revisiones ilimitadas"
      ],
      featured: true
    },
    {
      label: "Rediseño",
      name: "Mejora tu web",
      price: "149",
      description: "pago único · envíame tu web actual",
      features: [
        "Análisis de tu web actual",
        "Rediseño completo",
        "Misma URL, nueva imagen",
        "Adaptada a móvil",
        "3 revisiones incluidas"
      ],
      featured: false
    }
  ];

  return (
    <section id="precios" className="pricing section">
      <div className="container">
        <motion.div
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Precios</span>
          <h2 className="section-title">Claro y sin sorpresas</h2>
          <p className="section-subtitle">
            Precio cerrado desde el primer día. Pagas cuando estás contento con el resultado.
          </p>
        </motion.div>

        <div className="pricing-grid" ref={ref}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.featured ? 'pricing-card-featured' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {plan.featured && (
                <div className="pricing-badge">Recomendado</div>
              )}

              <div className="pricing-card-header">
                <div className="pricing-label">{plan.label}</div>
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">
                  <span className="pricing-currency">€</span>
                  {plan.price}
                </div>
                <p className="pricing-description">{plan.description}</p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing-feature">
                    <span className="pricing-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} pricing-cta`}
              >
                Empezar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
