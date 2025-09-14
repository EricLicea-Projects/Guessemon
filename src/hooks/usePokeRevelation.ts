import { useCallback, useEffect, useMemo, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import useHintStore from "@/hooks/useHintStore";
import type { PokeOfTheDay } from "@/hooks/useGetPokeOfDay";

const SPIN = { rotate: 360 };
const PULSE = { scale: [1, 1.05, 1] };

export function usePokeRevelation(
  pokemonOfTheDay: PokeOfTheDay | undefined,
  numOfGuesses: number,
  gameOver: boolean
) {
  const hasWon = useHintStore((s) => s.correct);
  const prefersReduced = useReducedMotion();

  // Assets
  const id = pokemonOfTheDay?.id ?? 0;
  const imgSrc = `/assets/pokemon/${id}.png`;

  // ♫ Audio
  const cryId = pokemonOfTheDay?.id ?? 25; // Pikachu fallback if no data
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current?.pause();
    audioRef.current = new Audio(`/assets/cries/${cryId}.mp3`);
  }, [cryId]);

  const playCry = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = 0;
    void a.play();
  }, []);

  // Blur logic: step down by 0.1rem per guess, floor at 0.4 while playing,
  // and 0 when the game is over.
  const blurRem = useMemo(() => {
    const stepped = Math.max(1 - numOfGuesses * 0.1, 0);
    return gameOver ? 0 : Math.max(stepped, 0.4);
  }, [numOfGuesses, gameOver]);

  const filterCss = useMemo(
    () =>
      blurRem > 0 ? `brightness(0) invert(1) blur(${blurRem}rem)` : "none",
    [blurRem]
  );

  // Ring background + animation profile (pulse while guessing, spin on win)
  const ring = useMemo(() => {
    const bg = hasWon
      ? "conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet)"
      : "conic-gradient(from 0deg, rgb(92,82,182), rgb(212,52,204), rgb(92,82,182), rgb(212,52,204))";

    if (prefersReduced) {
      return { bg, variants: undefined, transition: undefined };
    }
    return hasWon
      ? {
          bg,
          variants: SPIN,
          transition: { duration: 2, ease: "linear", repeat: Infinity },
        }
      : {
          bg,
          variants: PULSE,
          transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
        };
  }, [hasWon, prefersReduced]);

  return {
    hasWon,
    pokemonImg: imgSrc,
    playCry,
    filterCss,
    ring,
  };
}
