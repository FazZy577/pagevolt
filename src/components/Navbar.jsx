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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="navbar-spacer"></div>

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

        <a href="#contacto" className="navbar-cta btn btn-primary">
          Empezar
        </a>
      </div>

      {/* Overlay */}
      <div
        className={`navbar-mobile-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`navbar-mobile-sidebar ${mobileMenuOpen ? 'open' : ''}`}
        style={{
          background: '#0f0f0f',
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '75%',
          maxWidth: '320px',
          zIndex: 200,
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem 1.5rem',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          boxShadow: '-4px 0 24px rgba(0,0,0,0.5)',
          overflowY: 'auto'
        }}
      >
        <button
          className="navbar-mobile-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        <div className="navbar-mobile-logo">
          Page<span>Volt</span>
        </div>

        <nav className="navbar-mobile-links">
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
          <a href="#proceso" onClick={() => setMobileMenuOpen(false)}>Proceso</a>
          <a href="#precios" onClick={() => setMobileMenuOpen(false)}>Precios</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <Link to="/pago" onClick={() => setMobileMenuOpen(false)}>Pago</Link>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contactar</a>
        </nav>

        <a
          href="#contacto"
          className="navbar-mobile-cta btn btn-primary"
          onClick={() => setMobileMenuOpen(false)}
        >
          Empezar
        </a>
      </div>
    </motion.nav>
  );
}
