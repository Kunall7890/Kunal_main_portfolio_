
import { useEffect, useRef, useState } from 'react';

type SoundPlayerProps = {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  volume?: number;
  playOnMount?: boolean;
};

export const SoundPlayer = ({ 
  src, 
  autoPlay = false, 
  loop = false, 
  volume = 1,
  playOnMount = false
}: SoundPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (playOnMount && audioRef.current && !error) {
      audioRef.current.play().catch(err => {
        console.log("Audio couldn't play automatically:", err);
        setError(true);
      });
    }
  }, [playOnMount, error]);

  const play = () => {
    if (audioRef.current && !error) {
      audioRef.current.play().catch(err => {
        console.log("Audio play error:", err);
        setError(true);
      });
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const handleError = () => {
    console.log(`Failed to load audio: ${src}`);
    setError(true);
  };

  return (
    <audio
      ref={audioRef}
      src={src}
      autoPlay={autoPlay}
      loop={loop}
      className="hidden"
      onError={handleError}
    />
  );
};
