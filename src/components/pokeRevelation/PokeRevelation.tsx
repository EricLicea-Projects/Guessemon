import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { usePokeRevelation } from "./usePokeRevelation";
import { PokeOfTheDay } from "@/hooks/useGetPokeOfDay";

interface PokeRevelationProps {
  pokemonOfTheDay: PokeOfTheDay | undefined;
  numOfGuesses: number;
  gameOver: boolean;
}

const MotionBox = motion.create(Box);
const MotionImage = motion.create(Image);

const TEAL = "rgba(0, 255, 221, 0.5)";
const GOLD = "rgba(8, 8, 2, 0.55)";

const PokeRevelation = ({
  pokemonOfTheDay,
  numOfGuesses,
  gameOver,
}: PokeRevelationProps) => {
  const { hasWon, pokemonImg, filterCss, ring } = usePokeRevelation(
    pokemonOfTheDay,
    numOfGuesses,
    gameOver
  );

  return (
    <MotionBox position="relative" boxSize={{ base: "150px", md: "200px" }}>
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        boxSize="100%"
      >
        <MotionBox
          key={`border-${hasWon}`}
          boxSize="100%"
          borderRadius="full"
          background={ring.bg}
          zIndex={0}
          filter={{ base: "blur(0.6rem)", md: "blur(0.5rem)" }}
          opacity={0.8}
          animate="animate"
          variants={ring.variants ? { animate: ring.variants } : undefined}
          transition={ring.transition}
        />
      </Box>
      <Box
        layerStyle="pokeBallFrame"
        position="relative"
        boxSize="100%"
        borderRadius="full"
        border={`4px double ${hasWon ? GOLD : TEAL}`}
        overflow="hidden"
        zIndex={1}
      >
        <MotionImage
          src={pokemonImg}
          alt="Mystery Pokémon"
          boxSize="100%"
          objectFit="cover"
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
          initial={false}
          animate={{ filter: filterCss }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          sx={{
            WebkitTapHighlightColor: "transparent",
            userSelect: "none",
            WebkitTouchCallout: "none",
          }}
        />
      </Box>
    </MotionBox>
  );
};

export default PokeRevelation;
