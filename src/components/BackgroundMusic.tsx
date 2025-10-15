import { useState, useEffect, useRef } from 'react';
import GIU1 from '../assets/audio/GIU1.mp3';
import GIU2 from '../assets/audio/GIU2.mp3';
import GIU3 from '../assets/audio/GIU3.mp3';

interface BackgroundMusicProps {
  isEnabled: boolean;
}

const BackgroundMusic = ({ isEnabled }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const tracks = [GIU1, GIU2, GIU3];

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    if (isEnabled) {
      audio.volume = 0.5; // Set volume to 50%
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isEnabled]);

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    audio.src = tracks[currentTrackIndex];

    if (isEnabled) {
      audio.play().catch(console.error);
    }
  }, [currentTrackIndex, isEnabled]);

  const handleTrackEnd = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  return (
    <audio
      ref={audioRef}
      onEnded={handleTrackEnd}
      preload="auto"
      style={{ display: 'none' }}
    />
  );
};

export default BackgroundMusic;