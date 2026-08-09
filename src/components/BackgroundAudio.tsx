"use client";

import { useEffect, useRef, useState } from "react";

interface BackgroundAudioProps {
  src: string; // Path to your audio file (e.g., "/music/autumn-theme.mp3")
}

export default function BackgroundAudio({ src}: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Attempt to autoplay
    const promise = audio.play();

    if (promise !== undefined) {
      promise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  });

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={src} loop />
    </div>
  );
}