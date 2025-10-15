import { useEffect, useRef, useState } from 'react';

interface Card {
  id: number;
  x: number;
  y: number;
  rotation: number;
  velocityX: number;
  velocityY: number;
  angularVelocity: number;
}

function PhysicsCards() {
  const [cards, setCards] = useState<Card[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const initialCards: Card[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 50 + (Math.random() - 0.5) * 60,
      y: 20 + Math.random() * 80,
      rotation: (Math.random() - 0.5) * 45,
      velocityX: (Math.random() - 0.5) * 2,
      velocityY: Math.random() * 0.6 + 0.3,
      angularVelocity: (Math.random() - 0.5) * 1.2,
    }));
    setCards(initialCards);

    const animate = () => {
      setCards((prevCards) =>
        prevCards.map((card) => {
          let newY = card.y + card.velocityY;
          let newX = card.x + card.velocityX;
          let newVelocityY = card.velocityY + 0.12;
          let newVelocityX = card.velocityX;
          let newRotation = card.rotation + card.angularVelocity;

          if (newY > 100) {
            newY = -10;
            newX = 50 + (Math.random() - 0.5) * 60;
            newVelocityY = Math.random() * 0.6 + 0.3;
            newVelocityX = (Math.random() - 0.5) * 1.2;
            newRotation = (Math.random() - 0.5) * 45;
          }

          if (newX < -10) newX = 110;
          if (newX > 110) newX = -10;

          return {
            ...card,
            x: newX,
            y: newY,
            rotation: newRotation,
            velocityX: newVelocityX,
            velocityY: newVelocityY,
          };
        })
      );
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12 tracking-wider">
          GIVE IT UPs
        </h2>

        <div className="relative h-[600px]">
          {cards.map((card) => (
            <div
              key={card.id}
              className="absolute w-48 h-64 border-2 border-white/30 bg-black/40 backdrop-blur-sm rounded-lg shadow-2xl p-6 flex flex-col items-center justify-center"
              style={{
                left: `${card.x}%`,
                top: `${card.y}%`,
                transform: `translate(-50%, -50%) rotate(${card.rotation}deg)`,
                transition: 'none',
              }}
            >
              <h3 className="text-2xl font-bold text-center mb-4">GIVE IT UP</h3>
              <p className="text-sm text-white/70 text-center">Give it up</p>
              <div className="mt-4 text-xs text-white/50 text-center">
                Give it up just like gave it up
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PhysicsCards;
