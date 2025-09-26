import { memo } from "react";
import { HStack, Text, Image, VStack } from "@chakra-ui/react";

import { contentVariants, MotionVStack } from "./hintCard.constants";
import { useHintTransition } from "./useHintTransition";
import HintCardTypes from "./HintCardTypes";
import type { Hints } from "@/hooks/useHintStore";
import { pokemonList } from "@/data/pokemonData";
import HintCardRegion from "./HintCardRegion";
import HintCardColor from "./HintCardColor";
import HintCardShape from "./HintCardShape";

type Props = {
  hint: Hints;
};

const HintCardContent = memo(({ hint }: Props) => {
  const transition = useHintTransition();
  const name = pokemonList[hint.id - 1]?.name ?? `#${hint.id}`;
  const spriteSrc = `/assets/pokemon/${hint.id}.png`;

  return (
    <MotionVStack
      key={hint.id}
      position="absolute"
      inset={0}
      variants={contentVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={transition}
      w="100%"
      h="100%"
      spacing={0}
    >
      <HStack
        p={2}
        w="100%"
        borderBottom="2px dotted"
        borderColor="red.300"
        align="center"
        justify="space-between"
      >
        <Text
          color="red.300"
          width={{ base: "110px", md: "auto" }}
          fontSize={{ base: "xs", md: "sm" }}
          noOfLines={1}
          isTruncated
        >
          {name}
        </Text>
        <HintCardTypes types={hint.types} />
      </HStack>
      <HStack p={1.5} w="100%" justify="space-around" align="center">
        <Image
          src={spriteSrc}
          alt={name}
          boxSize="100px"
          objectFit="contain"
          fallbackSrc={`${
            import.meta.env.BASE_URL
          }assets/pokemon/placeholder.png`}
          draggable={false}
          sx={{ imageRendering: "pixelated" }}
        />
        <VStack align="flex-start">
          <HStack>
            <HintCardRegion
              generation={hint.generation.guess}
              isShared={hint.generation.is_correct}
            />
            <HintCardColor
              color={hint.color.guess}
              isShared={hint.color.is_correct}
            />
          </HStack>
          <HintCardShape
            shapeName={hint.shape.guess}
            isShared={hint.shape.is_correct}
          />
        </VStack>
      </HStack>
    </MotionVStack>
  );
});

export default HintCardContent;
