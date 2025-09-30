import { useEffect, useState } from 'react';

const Particle = ({ x, y, id, onComplete }) => {
  const [position, setPosition] = useState({ x, y });
  const [opacity, setOpacity] = useState(1);

  // Angle aléatoire pour la direction
  const angle = Math.random() * Math.PI * 2;
  const velocity = 2 + Math.random() * 3;
  const color = ['#facc15', '#ef4444', '#22c55e', '#60a5fa'][Math.floor(Math.random() * 4)];
  const size = 8 + Math.random() * 8;

  useEffect(() => {
    let frame = 0;
    const animate = () => {
      frame++;
      setPosition(prev => ({
        x: prev.x + Math.cos(angle) * velocity,
        y: prev.y + Math.sin(angle) * velocity - frame * 0.3 // Gravité
      }));
      setOpacity(1 - frame / 30);

      if (frame < 30) {
        requestAnimationFrame(animate);
      } else {
        onComplete(id);
      }
    };
    animate();
  }, []);

  return (
    <div
      className="absolute rounded-full pointer-events-none z-20"
      style={{
        left: position.x,
        top: position.y,
        width: size,
        height: size,
        backgroundColor: color,
        opacity,
        transform: `translate(-50%, -50%)`
      }}
    />
  );
};

export default Particle;