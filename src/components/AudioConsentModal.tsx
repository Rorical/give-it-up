import { useState } from 'react';

interface AudioConsentModalProps {
  onAccept: () => void;
  onDecline: () => void;
}

const AudioConsentModal = ({ onAccept, onDecline }: AudioConsentModalProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    onAccept();
  };

  const handleDecline = () => {
    setIsVisible(false);
    onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md">
      <div className="bg-black border border-white/30 p-12 rounded-lg shadow-2xl max-w-lg mx-4 text-center backdrop-blur-sm">
        <h2 className="text-4xl font-bold mb-6 tracking-wider text-white">GIVE IT UP</h2>
        <h3 className="text-2xl font-bold mb-4 tracking-wide text-white">FOR SOUND</h3>
        <p className="mb-8 text-white/70 text-lg tracking-wide">
          This website features background music to enhance your experience.
          Would you like to enable sound?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleAccept}
            className="px-8 py-4 bg-white text-black hover:bg-white/90 transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-none border-2 border-white shadow-xl font-bold text-lg tracking-wider"
          >
            GIVE IT UP
          </button>
          <button
            onClick={handleDecline}
            className="px-8 py-4 bg-transparent text-white border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95 rounded-none shadow-xl font-bold text-lg tracking-wider"
          >
            KEEP IT QUIET
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioConsentModal;