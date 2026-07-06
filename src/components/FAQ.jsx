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
      question: "¿Cuánto cuesta una página web para un restaurante?",
      answer: "El precio de una web para restaurante en Voltted empieza desde 150€ para webs esenciales hasta 300€ para webs completas con reservas online. El pago es 50% al inicio y 50% al aprobar el diseño. Sin costes ocultos ni sorpresas."
    },
    {
      question: "¿Cuánto tarda en estar lista la web?",
      answer: "El diseño inicial está listo en 72 horas. Incluye 3 rondas de revisiones para ajustar todo a tu gusto. La web está publicada y funcionando en menos de una semana desde que empezamos. Para webs con reservas automáticas, entre 4 y 7 días."
    },
    {
      question: "¿Trabajáis solo en España o también en otros países?",
      answer: "Trabajamos en remoto para cualquier país. Hemos diseñado webs para negocios locales en España, Latinoamérica y Europa. El idioma y la moneda no son problema — nos adaptamos a tus necesidades."
    },
    {
      question: "¿La web funciona bien en móvil?",
      answer: "Sí, todas nuestras webs son 100% responsive y se adaptan perfectamente a móviles y tablets. Más del 70% de clientes buscan negocios desde el móvil, por lo que el diseño móvil es nuestra prioridad. Google también prioriza webs optimizadas para móvil."
    },
    {
      question: "¿Qué incluye el diseño web para negocios locales?",
      answer: "Incluye diseño personalizado adaptado a tu marca, adaptación perfecta a móvil, formulario de contacto, integración de reservas online, optimización básica para Google, galería de fotos, mapa de ubicación, y recomendaciones de hosting. Todo listo para empezar a recibir clientes."
    },
    {
      question: "¿Necesito saber de informática?",
      answer: "Para nada. Me encargo de todo: diseño, publicación, configuración técnica y optimización. Solo necesito que me cuentes cómo es tu negocio, qué ofreces y qué quieres transmitir. Yo me ocupo de la parte técnica."
    },
    {
      question: "¿Hay costes extra después?",
      answer: "El precio que acordamos es el precio final del diseño. El único coste extra es el alojamiento anual de la web (aproximadamente 10-15€/año), que contratas tú directamente con el proveedor de hosting que te recomiendo."
    },
    {
      question: "¿Puedo pedir cambios después?",
      answer: "Sí. Durante el proceso tienes 3 rondas de revisiones incluidas según el plan. Cambios pequeños después de publicar (corregir un texto, actualizar una foto) los hago sin problema y sin coste adicional."
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
