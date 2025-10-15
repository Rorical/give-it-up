import { useState } from 'react';
import Footer from '../components/Footer';

const giveItUpPhrases = [
  'GIVE IT UP',
  'Give it up for the moment',
  'GIVE IT UP NOW',
  'Give it up forever',
  'GIVE IT ALL UP',
  'Give it up to the sky',
  'GIVE IT UP TONIGHT',
  'Give it up for tomorrow',
  'GIVE IT UP COMPLETELY',
  'Give it up and let go',
  'GIVE IT UP RIGHT NOW',
  'Give it up with style',
  'GIVE IT UP GRACEFULLY',
  'Give it up without regret',
  'GIVE IT UP FREELY',
  'Give it up for the universe',
];

function BookPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const totalPages = 8;

  const nextPage = () => {
    if (currentPage < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const prevPage = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
      }, 600);
    }
  };

  const getRandomPhrase = (seed: number) => {
    return giveItUpPhrases[seed % giveItUpPhrases.length];
  };

  return (
    <div className="min-h-screen pt-32 pb-32 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-4 tracking-wider">
          THE GIVE IT UP BOOK
        </h1>
        <p className="text-center text-white/70 mb-12 text-lg">
          An interactive journey through giving it up
        </p>

        <div className="relative flex items-center justify-center mb-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 0 || isFlipping}
            className="absolute left-0 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-bold tracking-wider border border-white/30 transition-all z-10"
          >
            ← PREVIOUS
          </button>

          <div className="perspective-1000">
            <div
              className={`relative w-[800px] h-[600px] transition-all duration-600 ${
                isFlipping ? 'animate-flip' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 border-4 border-white/30 rounded-lg shadow-2xl p-12 backdrop-blur-sm">
                <div className="flex h-full">
                  <div className="flex-1 border-r-2 border-white/20 pr-8">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h2 className="text-4xl font-bold mb-6 tracking-wider">
                          {getRandomPhrase(currentPage * 2)}
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed">
                          {getRandomPhrase(currentPage * 2 + 1)}. {getRandomPhrase(currentPage * 3)}.{' '}
                          {getRandomPhrase(currentPage * 4 + 2)}. {getRandomPhrase(currentPage * 5 + 1)}.
                        </p>
                        <p className="text-white/60 text-base mt-4 leading-relaxed">
                          {getRandomPhrase(currentPage * 6)}. {getRandomPhrase(currentPage * 7 + 3)}.
                        </p>
                      </div>
                      <div className="text-sm text-white/40 text-center">
                        Page {currentPage * 2 + 1}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 pl-8">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h2 className="text-4xl font-bold mb-6 tracking-wider">
                          {getRandomPhrase(currentPage * 2 + 10)}
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed">
                          {getRandomPhrase(currentPage * 3 + 5)}. {getRandomPhrase(currentPage * 4 + 7)}.{' '}
                          {getRandomPhrase(currentPage * 5 + 9)}. {getRandomPhrase(currentPage * 6 + 2)}.
                        </p>
                        <p className="text-white/60 text-base mt-4 leading-relaxed">
                          {getRandomPhrase(currentPage * 7)}. {getRandomPhrase(currentPage * 8 + 4)}.
                        </p>
                      </div>
                      <div className="text-sm text-white/40 text-center">
                        Page {currentPage * 2 + 2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1 || isFlipping}
            className="absolute right-0 bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-bold tracking-wider border border-white/30 transition-all z-10"
          >
            NEXT →
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!isFlipping) {
                  setIsFlipping(true);
                  setTimeout(() => {
                    setCurrentPage(i);
                    setIsFlipping(false);
                  }, 600);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentPage === i ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="bg-white/5 border border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-3 tracking-wider">GIVE IT UP</h3>
            <p className="text-white/70">Total pages read: {currentPage + 1} / {totalPages}</p>
          </div>
          <div className="bg-white/5 border border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-3 tracking-wider">GIVE IT UP</h3>
            <p className="text-white/70">Current chapter: Give It Up</p>
          </div>
          <div className="bg-white/5 border border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-3 tracking-wider">GIVE IT UP</h3>
            <p className="text-white/70">Progress: {Math.round(((currentPage + 1) / totalPages) * 100)}%</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default BookPage;
