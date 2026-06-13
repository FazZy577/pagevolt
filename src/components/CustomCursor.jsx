import { useState, useEffect } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Añadir punto al rastro
      setTrail((prevTrail) => [
        ...prevTrail.slice(-8), // Mantener solo los últimos 8 puntos
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ]);
    };

    const updateCursorType = (e) => {
      const target = e.target;
      const isClickable = target.tagName === 'A' ||
                         target.tagName === 'BUTTON' ||
                         target.closest('a') ||
                         target.closest('button') ||
                         window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mouseover', updateCursorType);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mouseover', updateCursorType);
    };
  }, []);

  return (
    <>
      {/* Rastro de partículas */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="cursor-trail"
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
            opacity: (index / trail.length) * 0.6,
            transform: `translate(-50%, -50%) scale(${0.3 + (index / trail.length) * 0.7})`
          }}
        />
      ))}

      {/* Cursor principal */}
      <div
        className={`custom-cursor ${isPointer ? 'cursor-hover' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      >
        <div className="cursor-glow"></div>
        <div className="cursor-core"></div>
      </div>
    </>
  );
}
