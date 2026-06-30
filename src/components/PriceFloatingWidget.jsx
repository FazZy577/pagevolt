import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import './PriceFloatingWidget.css';

export default function PriceFloatingWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isPricingSectionVisible, setIsPricingSectionVisible] = useState(false);

  useEffect(() => {
    // Scroll detection
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled && !isClosed && !isPricingSectionVisible);
    };

    // IntersectionObserver for pricing section
    const pricingSection = document.getElementById('precios');
    if (pricingSection) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsPricingSectionVisible(entry.isIntersecting);
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px'
        }
      );

      observer.observe(pricingSection);

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClosed, isPricingSectionVisible]);

  const handleClose = () => {
    setIsClosed(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const pricingSection = document.getElementById('precios');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="price-floating-widget">
      <button className="price-widget-close" onClick={handleClose} aria-label="Cerrar">
        <X size={16} />
      </button>

      <div className="price-widget-content">
        <span className="price-widget-label">DESDE</span>
        <div className="price-widget-price">
          <span className="price-widget-currency">€</span>
          99
        </div>
        <p className="price-widget-description">Pago único · Sin cuotas</p>
        <a href="#precios" className="price-widget-cta" onClick={handleClick}>
          Ver planes →
        </a>
      </div>
    </div>
  );
}
