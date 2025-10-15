import { useState } from 'react';

interface Paper {
  id: number;
  x: number;
  rotation: number;
}

function InteractiveButton() {
  const [papers, setPapers] = useState<Paper[]>([]);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    const newPaper: Paper = {
      id: Date.now(),
      x: Math.random() * 80 + 10,
      rotation: (Math.random() - 0.5) * 30,
    };
    setPapers((prev) => [...prev, newPaper]);
    setClickCount((prev) => prev + 1);

    setTimeout(() => {
      setPapers((prev) => prev.filter((paper) => paper.id !== newPaper.id));
    }, 3500);
  };

  return (
    <section className="relative min-h-screen py-20 px-4 flex flex-col items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8 tracking-wider">
          GIVE IT UP
        </h2>
        <p className="text-xl text-white/70 mb-12">
          Press the button to give it up
        </p>

        <button
          onClick={handleClick}
          className="px-12 py-6 text-2xl font-bold bg-white text-black hover:bg-white/90 transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-none border-4 border-white shadow-2xl"
        >
          GIVE IT UP
        </button>

        <div className="mt-8 text-white/50">
          Given up {clickCount} times
        </div>

        <div className="relative mt-12 min-h-[400px]">
          {papers.map((paper) => (
            <div
              key={paper.id}
              className="absolute w-64 h-32 bg-white/10 border border-white/30 rounded-lg shadow-xl p-6 animate-fallDown backdrop-blur-sm"
              style={{
                left: `${paper.x}%`,
                transform: `translateX(-50%) rotate(${paper.rotation}deg)`,
              }}
            >
              <p className="text-2xl font-bold text-center">GIVE IT UP</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InteractiveButton;
