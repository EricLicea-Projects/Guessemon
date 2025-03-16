import { PokeOfTheDay } from "@/hooks/useGetPokeOfDay";
import useHintStore from "@/hooks/useHintStore";
import { Box, Image } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

interface PokeRevelationProps {
  pokemonOfTheDay: PokeOfTheDay | null;
  numOfGuesses: number;
  gameOver: boolean;
}

const spinAnimation = keyframes`
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to { transform: translate(-50%, -50%) rotate(360deg); }
`;

const pulseAnimation = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.05); }
  100% { transform: translate(-50%, -50%) scale(1); }
`;

const PokeRevelation = ({
  pokemonOfTheDay,
  numOfGuesses,
  gameOver,
}: PokeRevelationProps) => {
  const hasWon = useHintStore((state) => state.correct);

  const pokemonImg = `/assets/pokemon/${pokemonOfTheDay?.id ?? 0}.png`;
  const cryUrl = `/assets/cries/${pokemonOfTheDay?.id ?? 25}.ogg`;
  const blurAmount = Math.max(1 - numOfGuesses * 0.1, 0.4);

  const playCry = () => {
    const audio = new Audio(cryUrl);
    audio.play();
  };

  const animationStyle = hasWon
    ? `${spinAnimation} 2s linear infinite`
    : `${pulseAnimation} 2s ease-in-out infinite`;

  const borderBackground = hasWon
    ? "conic-gradient(from 0deg, red, orange, yellow, green, blue, indigo, violet)"
    : "conic-gradient(from 0deg, rgb(92, 82, 182), rgb(212, 52, 204), rgb(92, 82, 182), rgb(212, 52, 204))";

  const imageFilter = gameOver
    ? "none"
    : `brightness(0) saturate(100%) invert(1) blur(${blurAmount}rem)`;

  return (
    <Box position="relative" boxSize="200px">
      <Box
        position="absolute"
        top="50%"
        left="50%"
        boxSize="100%"
        transform="translate(-50%, -50%)"
        borderRadius="full"
        background={borderBackground}
        zIndex={0}
        filter="blur(0.9rem)"
        opacity={0.8}
        animation={animationStyle}
      />
      <Box
        position="relative"
        boxSize="200px"
        borderRadius="full"
        overflow="hidden"
        bg="custom.primary"
        zIndex={1}
      >
        <Image
          src={pokemonImg}
          alt="Mystery Pokémon"
          boxSize="100%"
          objectFit="cover"
          filter={imageFilter}
          onClick={playCry}
          cursor="pointer"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
          sx={{ WebkitTapHighlightColor: "transparent", userSelect: "none" }}
        />
      </Box>
    </Box>
  );
};

export default PokeRevelation;
