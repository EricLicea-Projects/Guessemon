import { memo, useMemo } from "react";
import { HStack, Image, VStack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

import { contentVariants, MotionVStack, ATTRS } from "./hintCard.constants";
import { useHintTransition } from "./useHintTransition";
import HintCardTypes from "./HintCardTypes";
import HintCardAttribute from "./HintCardAttribute";
import HintCardText from "./HintCardText";
import type { Hints } from "@/hooks/useHintStore";

type Props = {
  hint: Hints;
};

const HintCardContent = memo(({ hint }: Props) => {
  const transition = useHintTransition();

  const attrs = useMemo(() => ATTRS, []);

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <MotionVStack
        key={hint.id}
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
          w="100%"
          borderBottom="3px dotted"
          borderColor="custom.primaryBorder"
          align="stretch"
        >
          <Image
            objectFit="cover"
            boxSize="110px"
            src={`/assets/pokemon/${hint.id}.png`}
            alt={`Guessed Pokémon #${hint.id}`}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
          <VStack flexGrow={1} spacing={1} py={2}>
            <HintCardTypes types={hint.types} />
            <HStack justify="space-around" w="100%">
              {attrs.map(({ key, name, hasImg, hasText }) => (
                <HintCardAttribute
                  key={key}
                  attribute={hint[key]}
                  name={name}
                  hasImg={!!hasImg}
                  hasText={!!hasText}
                />
              ))}
            </HStack>
          </VStack>
        </HStack>

        <HintCardText id={hint.id} height={hint.height} weight={hint.weight} />
      </MotionVStack>
    </AnimatePresence>
  );
});

export default HintCardContent;
