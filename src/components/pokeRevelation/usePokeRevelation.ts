import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";
import useHintStore from "@/hooks/useHintStore";
import type { PokeOfTheDay } from "@/hooks/useGetPokeOfDay";

const SPIN_POP = { rotate: 360, scale: 1.1 };
const PULSE = { scale: [0.98, 1.01, 0.98] };

const TEAL_RING =
  "radial-gradient(circle at 50% 55%, rgba(0, 255, 221, 1) 0 34%, rgba(0, 224, 194, 1) 55%)";
const GOLD_RING =
  "radial-gradient(circle at 50% 55%, rgba(253,230,138,0.38) 0 34%, rgba(245, 159, 11, 0.48) 34%, rgba(0,0,0,0) 79%)";

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
    const bg = hasWon ? GOLD_RING : TEAL_RING;

    if (prefersReduced) {
      return { bg, variants: undefined, transition: undefined };
    }
    return hasWon
      ? {
          bg,
          variants: SPIN_POP,
          transition: {
            rotate: { duration: 1, ease: "linear", repeat: Infinity },
            scale: { duration: 0.3, ease: "easeOut" },
          },
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
    filterCss,
    ring,
  };
}
