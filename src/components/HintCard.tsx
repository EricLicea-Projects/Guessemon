import { Box, Divider, HStack, Image, Text, VStack } from "@chakra-ui/react";

import { Hints } from "@/hooks/useSendGuess";
import HintCardTypes from "./HintCardTypes";
import HintCardAttribute from "./HintCardAttribute";

interface HintCardProps {
  hints: Hints;
}

const HintCard = ({ hints }: HintCardProps) => {
  const { id, types, shape, color, generation, height, weight } = hints;

  const pokemonImg = `/assets/pokemon/${id}.png`;

  return (
    <VStack
      width={{ base: "95%", md: "500px" }}
      bgGradient="linear(to-t, custom.secondaryLight 20%,rgb(61, 61, 61))"
      border="4px double"
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
            <HintCardAttribute
              attribute={shape}
              name="Shape"
              hasImg={true}
              hasText={false}
            />
            <HintCardAttribute
              attribute={color}
              name="Color"
              hasImg={false}
              hasText={false}
            />
            <HintCardAttribute
              attribute={generation}
              name="Gen"
              hasImg={false}
              hasText={true}
            />
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
