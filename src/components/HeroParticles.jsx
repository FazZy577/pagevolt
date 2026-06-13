import './HeroParticles.css';

// Función para generar posiciones aleatorias
const getRandomPosition = (index, seed) => {
  const x = (index * 37 + seed * 13) % 100;
  const y = (index * 53 + seed * 17) % 100;
  return { x, y };
};

export default function HeroParticles() {
  return (
    <div className="hero-particles">
      {/* Capa 1: Olas grandes de fondo */}
      {[...Array(4)].map((_, i) => {
        const pos = getRandomPosition(i, 7);
        return (
          <div
            key={`wave-${i}`}
            className="particle particle-wave"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + (i % 4)}s`
            }}
          />
        );
      })}

      {/* Capa 2: Partículas grandes */}
      {[...Array(8)].map((_, i) => {
        const pos = getRandomPosition(i, 11);
        return (
          <div
            key={`large-${i}`}
            className="particle particle-large"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${15 + (i % 5)}s`
            }}
          />
        );
      })}

      {/* Capa 3: Partículas medianas */}
      {[...Array(12)].map((_, i) => {
        const pos = getRandomPosition(i, 19);
        return (
          <div
            key={`medium-${i}`}
            className="particle particle-medium"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${12 + (i % 4)}s`
            }}
          />
        );
      })}

      {/* Capa 4: Partículas pequeñas */}
      {[...Array(20)].map((_, i) => {
        const pos = getRandomPosition(i, 23);
        return (
          <div
            key={`small-${i}`}
            className="particle particle-small"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${10 + (i % 4)}s`
            }}
          />
        );
      })}
    </div>
  );
}
