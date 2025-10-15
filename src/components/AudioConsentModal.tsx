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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-95">
      <div className="bg-white text-black p-8 rounded-lg shadow-2xl max-w-md mx-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Background Music</h2>
        <p className="mb-6 text-gray-700">
          This website features background music to enhance your experience.
          Would you like to enable sound?
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleAccept}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Yes, Enable Sound
          </button>
          <button
            onClick={handleDecline}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-semibold"
          >
            No Thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioConsentModal;