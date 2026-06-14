import { useEffect, useRef, useState } from 'react';
import './HeroParticles.css';

export default function HeroParticles() {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Configurar canvas
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Crear partículas (reducido a la mitad)
    const createParticles = () => {
      const particles = [];

      // Olas grandes (4 -> 2)
      for (let i = 0; i < 2; i++) {
        particles.push({
          x: (Math.random() * width),
          y: (Math.random() * height),
          size: 100 + Math.random() * 50,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: 0.03 + Math.random() * 0.02,
          type: 'wave'
        });
      }

      // Partículas grandes (8 -> 4)
      for (let i = 0; i < 4; i++) {
        particles.push({
          x: (Math.random() * width),
          y: (Math.random() * height),
          size: 40 + Math.random() * 30,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: 0.05 + Math.random() * 0.03,
          type: 'large'
        });
      }

      // Partículas medianas (12 -> 6)
      for (let i = 0; i < 6; i++) {
        particles.push({
          x: (Math.random() * width),
          y: (Math.random() * height),
          size: 20 + Math.random() * 20,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          opacity: 0.06 + Math.random() * 0.04,
          type: 'medium'
        });
      }

      // Partículas pequeñas (20 -> 10)
      for (let i = 0; i < 10; i++) {
        particles.push({
          x: (Math.random() * width),
          y: (Math.random() * height),
          size: 5 + Math.random() * 10,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: 0.08 + Math.random() * 0.05,
          type: 'small'
        });
      }

      return particles;
    };

    particlesRef.current = createParticles();

    // Animación
    const animate = () => {
      if (!isVisible) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      particlesRef.current.forEach(particle => {
        // Actualizar posición
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen
        if (particle.x < -particle.size) particle.x = width + particle.size;
        if (particle.x > width + particle.size) particle.x = -particle.size;
        if (particle.y < -particle.size) particle.y = height + particle.size;
        if (particle.y > height + particle.size) particle.y = -particle.size;

        // Dibujar partícula
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // IntersectionObserver para pausar cuando no es visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(canvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-particles-canvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
