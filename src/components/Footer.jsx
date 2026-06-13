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

        <nav className="footer-nav">
          <a href="#servicios">Servicios</a>
          <a href="#demos">Demos</a>
          <a href="#precios">Precios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </footer>
  );
}
