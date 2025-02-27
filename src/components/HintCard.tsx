import { Box, Divider, HStack, Image, Text, VStack } from "@chakra-ui/react";

import { Hints } from "@/hooks/useSendGuess";
import HintCardTypes from "./HintCardTypes";

interface HintCardProps {
  hints: Hints;
}

const HintCard = ({ hints }: HintCardProps) => {
  const { id, types, shape, color, generation, height, weight } = hints;

  const pokemonImg = `/assets/pokemon/${id}.png`;
  const shapeImg = "/assets/shapes/upright.png";

  const isCorrect = false;

  const bgColor = isCorrect ? "rgb(0, 134, 0)" : "rgb(148, 0, 0)";

  return (
    <VStack
      width={{ base: "95%", md: "500px" }}
      bg="custom.secondary"
      border="5px double"
      borderColor="custom.accentDark"
      borderRadius="sm"
      boxShadow="5px 10px 20px rgba(0, 0, 0, 0.7)"
    >
      <HStack width="100%">
        <Image
          objectFit="cover"
          boxSize="110px"
          src={pokemonImg}
          alt="The Guessed Pokemon"
        />
        <VStack flexGrow={1}>
          <HintCardTypes types={types} />
          <HStack justify="space-around" width="100%">
            <VStack gap={1}>
              <Text
                color="custom.primary"
                fontSize="xs"
                fontFamily='"Press Start 2P", cursive'
              >
                Shape
              </Text>
              <Box
                bg={bgColor}
                border="1px solid"
                borderColor={bgColor}
                borderRadius="md"
                boxSize="40px"
              >
                <Image src={shapeImg} alt="Pokemon Shape" objectFit="contain" />
              </Box>
            </VStack>
            <VStack gap={1}>
              <Text
                color="custom.primary"
                fontSize="xs"
                fontFamily='"Press Start 2P", cursive'
              >
                Color
              </Text>
              <Box
                bg="blue"
                border="2px solid"
                borderColor={bgColor}
                borderRadius="md"
                boxSize="40px"
              ></Box>
            </VStack>
            <VStack gap={1}>
              <Text
                color="custom.primary"
                fontSize="xs"
                fontFamily='"Press Start 2P", cursive'
              >
                Gen
              </Text>
              <Box
                bg={bgColor}
                border="1px solid"
                borderColor={bgColor}
                borderRadius="md"
                boxSize="40px"
              >
                <Text
                  color="custom.primary"
                  fontSize="xs"
                  fontFamily='"Press Start 2P", cursive'
                >
                  1
                </Text>
              </Box>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
      <Divider
        borderColor="custom.accentDark"
        borderWidth="1px"
        orientation="horizontal"
        my={1} // adds vertical margin
      />
      <Text
        color="custom.primary"
        fontSize="xs"
        fontFamily='"Press Start 2P", cursive'
      >
        Blastoise is heavier and taller.
      </Text>
    </VStack>
  );
};

export default HintCard;
