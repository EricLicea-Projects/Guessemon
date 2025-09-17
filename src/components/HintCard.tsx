import { HStack, Image, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useSelectedHint } from "../hooks/useSelectedHint";
import HintCardTypes from "./HintCardTypes";
import HintCardAttribute from "./HintCardAttribute";
import HintCardText from "./HintCardText";

const MotionVStack = motion.create(VStack);

const CARD_WIDTH = { base: "95%", md: "500px" };
const CARD_HEIGHT = "180px";

const contentVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

type AttrKey = "shape" | "color" | "generation";

interface AttrConfig {
  key: AttrKey;
  name: string;
  hasImg?: boolean;
  hasText?: boolean;
}

const ATTRS: ReadonlyArray<AttrConfig> = [
  { key: "shape", name: "Shape", hasImg: true },
  { key: "color", name: "Color" },
  { key: "generation", name: "Gen", hasText: true },
];

const HintCard = () => {
  const hint = useSelectedHint();
  const pokeball = "/assets/pokeball.png";
  const prefersReduced = useReducedMotion();

  const transition = prefersReduced
    ? { duration: 0 }
    : { duration: 0.18, ease: "easeOut" };

  return (
    <MotionVStack
      width={CARD_WIDTH}
      height={CARD_HEIGHT}
      bgGradient="linear(to-t, custom.primaryLight 35%, #0040bf)"
      border="4px solid"
      borderColor="custom.primaryBorder"
      borderRadius="sm"
      boxShadow="5px 10px 20px rgba(0, 0, 0, 0.7)"
      initial={false}
      layout
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {!hint ? (
          <MotionVStack
            key="placeholder"
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            justify="center"
            w="100%"
            h="100%"
          >
            <Image src={pokeball} boxSize="110px" alt="Pokeball Placeholder" />
          </MotionVStack>
        ) : (
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
            >
              <Image
                objectFit="cover"
                boxSize="110px"
                src={`/assets/pokemon/${hint.id}.png`}
                alt={`Guessed Pokémon #${hint.id}`}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
              />
              <VStack flexGrow={1}>
                <HintCardTypes types={hint.types} />
                <HStack justify="space-around" w="100%">
                  {ATTRS.map(({ key, name, hasImg, hasText }) => (
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
            <HintCardText
              id={hint.id}
              height={hint.height}
              weight={hint.weight}
            />
          </MotionVStack>
        )}
      </AnimatePresence>
    </MotionVStack>
  );
};

export default HintCard;
