import { useState, useEffect, useRef, useMemo } from 'react';
import GIU1 from '../assets/audio/GIU1.mp3';
import GIU2 from '../assets/audio/GIU2.mp3';
import GIU3 from '../assets/audio/GIU3.mp3';

interface BackgroundMusicProps {
  isEnabled: boolean;
}

const BackgroundMusic = ({ isEnabled }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const tracks = useMemo(() => [GIU1, GIU2, GIU3], []);

  // Initialize audio source
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    audio.src = tracks[currentTrackIndex];
    audio.volume = 0.3; // Set volume to 30%
    audio.load();
  }, [currentTrackIndex, tracks]);

  // Handle play/pause based on isEnabled
  useEffect(() => {
    if (!audioRef.current || !isLoaded) return;

    const audio = audioRef.current;

    if (isEnabled) {
      audio.play().catch(error => {
        console.error('Audio play failed:', error);
      });
    } else {
      audio.pause();
    }
  }, [isEnabled, isLoaded]);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  const handleTrackEnd = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  const handleError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    console.error('Audio error:', e);
  };

  return (
    <audio
      ref={audioRef}
      onEnded={handleTrackEnd}
      onLoadedData={handleLoadedData}
      onError={handleError}
      preload="auto"
      style={{ display: 'none' }}
    />
  );
};

export default BackgroundMusic;