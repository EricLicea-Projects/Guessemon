import { Image } from "@chakra-ui/react";
import { contentVariants, MotionVStack } from "./hintCard.constants";
import { useHintTransition } from "./useHintTransition";
import { memo } from "react";

const Placeholder = memo(() => {
  const transition = useHintTransition();

  return (
    <MotionVStack
      key="placeholder"
      position="absolute"
      inset={0}
      variants={contentVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={transition}
      justify="center"
      w="100%"
      h="100%"
    >
      <Image src="/assets/pokeball.png" boxSize="110px" alt="Pokéball" />
    </MotionVStack>
  );
});

export default Placeholder;
