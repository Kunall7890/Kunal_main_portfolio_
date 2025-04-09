
import { useEffect, useRef } from 'react';

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

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (playOnMount && audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log("Audio couldn't play automatically:", err);
      });
    }
  }, [playOnMount]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log("Audio play error:", err);
      });
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <audio
      ref={audioRef}
      src={src}
      autoPlay={autoPlay}
      loop={loop}
      className="hidden"
    />
  );
};
