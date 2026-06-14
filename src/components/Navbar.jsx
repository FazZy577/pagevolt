import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Page<span>Volt</span>
        </Link>

        <ul className="navbar-menu">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#proceso">Proceso</a></li>
          <li><a href="#precios">Precios</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><Link to="/pago">Pago</Link></li>
        </ul>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`navbar-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
          <a href="#proceso" onClick={() => setMobileMenuOpen(false)}>Proceso</a>
          <a href="#precios" onClick={() => setMobileMenuOpen(false)}>Precios</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <Link to="/pago" onClick={() => setMobileMenuOpen(false)}>Pago</Link>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
        </div>

        <a href="#contacto" className="navbar-cta btn btn-primary">
          Empezar
        </a>
      </div>
    </motion.nav>
  );
}
