import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          {/* Columna 1 - Logo y descripción */}
          <div className="footer-column">
            <Link to="/" className="footer-logo">
              Volt<span>ix</span>
            </Link>
            <p className="footer-description">
              Diseño web para negocios locales. Bonito, rápido y que atrae clientes de verdad.
            </p>
            <a
              href="https://ig.me/m/voltix"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Columna 2 - Navegación */}
          <div className="footer-column">
            <h3 className="footer-column-title">NAVEGACIÓN</h3>
            <nav className="footer-links">
              <a href="/#servicios" onClick={(e) => { e.preventDefault(); window.location.href = '/#servicios'; }}>Servicios</a>
              <a href="/#proceso" onClick={(e) => { e.preventDefault(); window.location.href = '/#proceso'; }}>Proceso</a>
              <a href="/#precios" onClick={(e) => { e.preventDefault(); window.location.href = '/#precios'; }}>Precios</a>
              <a href="/#faq" onClick={(e) => { e.preventDefault(); window.location.href = '/#faq'; }}>FAQ</a>
              <Link to="/pago">Pago</Link>
            </nav>
          </div>

          {/* Columna 3 - Contacto */}
          <div className="footer-column">
            <h3 className="footer-column-title">CONTACTO</h3>
            <div className="footer-links">
              <a href="mailto:Voltix22@gmail.com" className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Voltix22@gmail.com
              </a>
              <a href="https://ig.me/m/voltix" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @Voltix
              </a>
            </div>
          </div>

          {/* Columna 4 - Empezar */}
          <div className="footer-column">
            <h3 className="footer-column-title">EMPIEZA HOY</h3>
            <a
              href="https://ig.me/m/voltix"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta-button btn btn-primary"
            >
              Solicitar presupuesto
            </a>
            <p className="footer-cta-text">Respuesta en menos de 24h</p>
          </div>
        </div>

        {/* Parte inferior */}
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Voltix · Todos los derechos reservados.</p>
          <div className="footer-legal">
            <Link to="/privacidad">Política de Privacidad</Link>
            <Link to="/terminos">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
