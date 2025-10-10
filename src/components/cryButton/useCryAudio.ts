import { useCallback, useEffect, useRef, useState } from "react";

const useCryAudio = (cryId: number, volume: number = 1) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const id = cryId ?? 25; // Pikachu fallback
    const src = `/assets/cries/${id}.mp3`;

    const prev = audioRef.current;
    if (prev) {
      prev.pause();
      setIsPlaying(false);
    }

    const a = new Audio(src);
    a.preload = "auto";
    a.volume = Math.min(Math.max(volume, 0), 1);

    const handlePlay = () => setIsPlaying(true);
    const handleEnded = () => setIsPlaying(false);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => setIsPlaying(false);

    a.addEventListener("play", handlePlay);
    a.addEventListener("ended", handleEnded);
    a.addEventListener("pause", handlePause);
    a.addEventListener("error", handleError);

    audioRef.current = a;

    return () => {
      a.removeEventListener("play", handlePlay);
      a.removeEventListener("ended", handleEnded);
      a.removeEventListener("pause", handlePause);
      a.removeEventListener("error", handleError);
      a.pause();
    };
  }, [cryId, volume]);

  const play = useCallback(async () => {
    const a = audioRef.current;
    if (!a) return;

    if (isPlaying) return;

    try {
      a.currentTime = 0;
      setIsPlaying(true); // set immediately to block double-click
      await a.play(); // resolves on user gesture; events keep state in sync
    } catch {
      setIsPlaying(false); // failed to play (policy, etc.)
    }
  }, [isPlaying]);

  const stop = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    a.pause();
    a.currentTime = 0;
    setIsPlaying(false);
  }, []);

  return { play, stop, isPlaying };
};

export default useCryAudio;
