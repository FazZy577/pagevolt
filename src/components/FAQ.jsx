import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "¿Cuánto tarda en estar lista la web?",
      answer: "Una web básica suele estar lista en 48-72 horas desde que me confirmas el proyecto. Con reservas automáticas, entre 4 y 7 días. Siempre te digo la fecha exacta antes de empezar."
    },
    {
      question: "¿Cuándo pago?",
      answer: "Para empezar solo pido una reserva de 50€. El resto se paga cuando la web está lista y tú la has aprobado. Si algo no te convence, lo corregimos antes de cerrar."
    },
    {
      question: "¿Necesito saber de informática?",
      answer: "Para nada. Me encargo de todo: diseño, publicación y configuración. Solo necesito que me cuentes cómo es tu negocio."
    },
    {
      question: "¿Hay costes extra después?",
      answer: "El precio que acordamos es el precio final. El único coste extra es el alojamiento anual de la web (~10-15€/año), que contratas tú directamente con el proveedor."
    },
    {
      question: "¿Puedo pedir cambios después?",
      answer: "Sí. Durante el proceso tienes revisiones incluidas según el plan. Cambios pequeños después de publicar los hago sin problema."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="faq-grid">
          <motion.div
            className="faq-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Dudas frecuentes</span>
            <h2 className="section-title">Lo que suelen<br />preguntar</h2>
            <p className="section-subtitle">
              Si tienes alguna otra duda, mándame un mensaje y te respondo en menos de 24h.
            </p>
          </motion.div>

          <div className="faq-items" ref={ref}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
