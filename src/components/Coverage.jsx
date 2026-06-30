import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Utensils,
  Coffee,
  Scissors,
  Stethoscope,
  ShoppingBag,
  Dumbbell,
  Building2,
  GraduationCap,
  Camera,
  Store
} from 'lucide-react';
import './Coverage.css';

export default function Coverage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectors = [
    {
      name: 'Restaurantes',
      icon: Utensils,
      url: '/diseno-web/restaurantes'
    },
    {
      name: 'Cafeterías y bares',
      icon: Coffee,
      url: '/diseno-web/cafeterias'
    },
    {
      name: 'Peluquerías y barberías',
      icon: Scissors,
      url: '/diseno-web/peluquerias'
    },
    {
      name: 'Clínicas y centros de salud',
      icon: Stethoscope,
      url: '/diseno-web/clinicas'
    },
    {
      name: 'Tiendas y comercios',
      icon: ShoppingBag,
      url: '/diseno-web/comercios'
    },
    {
      name: 'Gimnasios y centros deportivos',
      icon: Dumbbell,
      url: '/diseno-web/gimnasios'
    },
    {
      name: 'Inmobiliarias',
      icon: Building2,
      url: '/diseno-web/inmobiliarias'
    },
    {
      name: 'Academias y formación',
      icon: GraduationCap,
      url: '/diseno-web/academias'
    },
    {
      name: 'Fotógrafos y creativos',
      icon: Camera,
      url: '/diseno-web/fotografos'
    },
    {
      name: 'Otros negocios locales',
      icon: Store,
      url: '/diseno-web/negocios-locales'
    }
  ];

  return (
    <section className="coverage section">
      <div className="container">
        <motion.div
          className="coverage-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Cobertura por sector</span>
          <h2 className="section-title">Diseñamos webs para cualquier tipo de negocio</h2>
          <p className="section-subtitle">
            Adaptamos el diseño a tu sector. Trabajamos en remoto para cualquier país.
          </p>
        </motion.div>

        <div className="coverage-grid" ref={ref}>
          {sectors.map((sector, index) => {
            const IconComponent = sector.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.05 * index }}
              >
                <Link to={sector.url} className="coverage-card">
                  <div className="coverage-icon">
                    <IconComponent size={24} strokeWidth={2} />
                  </div>
                  <h3 className="coverage-name">{sector.name}</h3>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
