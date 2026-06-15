import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Process.css';

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Me cuentas tu negocio",
      description: "Un mensaje por Instagram. Me dices qué tienes y qué necesitas. Sin formularios."
    },
    {
      number: "02",
      title: "Propuesta y precio",
      description: "En 24h tienes una propuesta clara con precio cerrado. Sin sorpresas ni extras ocultos."
    },
    {
      number: "03",
      title: "Primer pago (50%)",
      description: "Realizas el 50% del pago acordado para comenzar el diseño. Proceso 100% seguro vía Stripe."
    },
    {
      number: "04",
      title: "Diseño y revisiones",
      description: "En 48h tienes un diseño inicial. Tienes hasta 3 revisiones incluidas para ajustar todo."
    },
    {
      number: "05",
      title: "Aprobación y entrega",
      description: "Cuando te gusta, pagas el 50% restante y tu web se publica. ¡Listo para recibir clientes!"
    }
  ];

  return (
    <section id="proceso" className="process section">
      <div className="container">
        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">El proceso</span>
          <h2 className="section-title">De cero a online<br />en 5 pasos</h2>
          <p className="section-subtitle">
            Sin reuniones eternas ni tecnicismos. Un proceso claro para que tú te centres en tu negocio.
          </p>
        </motion.div>

        <div className="process-timeline" ref={ref}>
          <div className="process-line"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-step"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * index }}
            >
              <div className="process-step-circle">
                <span>{step.number}</span>
              </div>
              <div className="process-step-content">
                <h4 className="process-step-title">{step.title}</h4>
                <p className="process-step-description">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
