import { useCallback, useMemo } from "react";
import useHintStore from "@/hooks/useHintStore";

const spinVariants = {
  animate: { rotate: 360 },
};

const pulseVariants = {
  animate: { scale: [1, 1.05, 1] },
};

export function usePokeRevelation(
  pokemonOfTheDay: any,
  numOfGuesses: number,
  gameOver: boolean
) {
  const hasWon = useHintStore((state) => state.correct);

  const pokemonId = pokemonOfTheDay?.id ?? 0;
  const DEFAULT_CRY_ID = 25;
  const pokemonImg = `/assets/pokemon/${pokemonId}.png`;
  const cryUrl = `/assets/cries/${pokemonOfTheDay?.id ?? DEFAULT_CRY_ID}.mp3`;

  const blurAmount = useMemo(
    () => Math.max(1 - numOfGuesses * 0.1, 0.4),
    [numOfGuesses]
  );

  const playCry = useCallback(() => {
    new Audio(cryUrl).play();
  }, [cryUrl]);

  const animationProps = useMemo(
    () =>
      hasWon
        ? {
            variants: spinVariants,
            transition: { duration: 2, ease: "linear", repeat: Infinity },
          }
        : {
            variants: pulseVariants,
            transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
          },
    [hasWon]
  );

  const borderBackground = useMemo(
    () =>
      hasWon
        ? "conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet)"
        : "conic-gradient(from 0deg, rgb(92, 82, 182), rgb(212, 52, 204), rgb(92, 82, 182), rgb(212, 52, 204))",
    [hasWon]
  );

  const imageVariants = useMemo(
    () => ({
      hidden: {
        filter: `brightness(0) saturate(100%) invert(1) blur(${blurAmount}rem)`,
      },
      revealed: {
        filter: "brightness(1) saturate(1) invert(0) blur(0)",
      },
    }),
    [blurAmount]
  );

  const imageAnimationState = gameOver ? "revealed" : "hidden";

  return {
    hasWon,
    pokemonImg,
    playCry,
    animationProps,
    borderBackground,
    imageVariants,
    imageAnimationState,
  };
}
