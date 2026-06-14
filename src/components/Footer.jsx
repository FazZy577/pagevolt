import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            Page<span>Volt</span>
          </a>
          <p className="footer-tagline">
            © 2025 PageVolt · Diseño web para negocios locales
          </p>
        </div>

        <nav className="footer-nav footer-nav-desktop">
          <a href="#servicios">Servicios</a>
          <a href="#precios">Precios</a>
          <a href="#contacto">Contacto</a>
          <Link to="/privacidad">Privacidad</Link>
          <Link to="/terminos">Términos</Link>
        </nav>

        <nav className="footer-nav footer-nav-mobile">
          <Link to="/privacidad">Política de Privacidad</Link>
          <Link to="/terminos">Términos y Condiciones</Link>
        </nav>
      </div>
    </footer>
  );
}
