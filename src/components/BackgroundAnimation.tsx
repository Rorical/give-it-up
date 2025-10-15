import { useEffect, useState } from 'react';

interface FloatingText {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
}

function BackgroundAnimation() {
  const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);

  useEffect(() => {
    const texts: FloatingText[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 5,
      size: 20 + Math.random() * 60,
    }));
    setFloatingTexts(texts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {floatingTexts.map((text) => (
        <div
          key={text.id}
          className="absolute opacity-0 animate-fadeInOut whitespace-nowrap"
          style={{
            left: `${text.x}%`,
            top: `${text.y}%`,
            fontSize: `${text.size}px`,
            animationDuration: `${text.duration}s`,
            animationDelay: `${text.delay}s`,
            opacity: 0.3,
          }}
        >
          GIVE IT UP
        </div>
      ))}
    </div>
  );
}

export default BackgroundAnimation;
