import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import BackgroundAnimation from '../components/BackgroundAnimation';
import PhysicsCards from '../components/PhysicsCards';
import InteractiveButton from '../components/InteractiveButton';
import Footer from '../components/Footer';

function HomePage() {
  const [currentFont, setCurrentFont] = useState(0);

  const fonts = [
    'font-serif',
    'font-mono',
    'font-sans',
    'tracking-tighter',
    'tracking-wider',
    'italic',
    'font-bold',
    'font-light',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFont((prev) => (prev + 1) % fonts.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <BackgroundAnimation />

      <section className="relative z-10 h-screen flex flex-col items-center justify-center px-4">
        <h1
          className={`text-9xl md:text-[12rem] font-bold text-center transition-all duration-300 ${fonts[currentFont]}`}
          style={{
            textShadow: '0 0 40px rgba(255,255,255,0.5)',
            letterSpacing: currentFont === 3 ? '-0.1em' : currentFont === 4 ? '0.1em' : 'normal'
          }}
        >
          GIVE IT UP
        </h1>
        <p className="mt-8 text-xl text-white/70 tracking-widest">
          GIVE IT UP BY GIVING IT UP
        </p>

        <ChevronDown
          className="absolute bottom-12 animate-bounce"
          size={48}
          strokeWidth={1}
        />
      </section>

      <PhysicsCards />

      <InteractiveButton />

      <Footer />
    </>
  );
}

export default HomePage;
