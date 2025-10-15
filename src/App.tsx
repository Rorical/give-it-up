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

  useEffect(() => {
    // Check if user has previously made a choice
    const hasConsented = localStorage.getItem('audioConsent');
    if (hasConsented) {
      setShowAudioConsent(false);
      setAudioEnabled(hasConsented === 'true');
    }
  }, []);

  const handleAudioAccept = () => {
    setAudioEnabled(true);
    setShowAudioConsent(false);
    localStorage.setItem('audioConsent', 'true');
  };

  const handleAudioDecline = () => {
    setAudioEnabled(false);
    setShowAudioConsent(false);
    localStorage.setItem('audioConsent', 'false');
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
