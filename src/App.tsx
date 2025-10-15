import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomMarquee from './components/BottomMarquee';
import AudioConsentModal from './components/AudioConsentModal';
import BackgroundMusic from './components/BackgroundMusic';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import BookPage from './pages/BookPage';

function App() {
  const [showAudioConsent, setShowAudioConsent] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);

  // No localStorage check - consent modal should appear every time

  const handleAudioAccept = async () => {
    setAudioEnabled(true);
    setShowAudioConsent(false);

    // Try to play audio immediately after user interaction
    setTimeout(() => {
      const audioElement = document.querySelector('audio');
      if (audioElement) {
        audioElement.play().catch(console.error);
      }
    }, 100);
  };

  const handleAudioDecline = () => {
    setAudioEnabled(false);
    setShowAudioConsent(false);
  };

  return (
    <Router>
      {showAudioConsent && (
        <AudioConsentModal
          onAccept={handleAudioAccept}
          onDecline={handleAudioDecline}
        />
      )}

      <BackgroundMusic isEnabled={audioEnabled} />

      <div className="relative bg-black text-white min-h-screen overflow-x-hidden">
        <Navbar />
        <BottomMarquee />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/book" element={<BookPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
