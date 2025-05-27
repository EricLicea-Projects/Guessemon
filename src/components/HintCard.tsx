import { HStack, Image, VStack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelectedHint } from "../hooks/useSelectedHint";
import HintCardTypes from "./HintCardTypes";
import HintCardAttribute from "./HintCardAttribute";
import HintCardText from "./HintCardText";

const MotionVStack = motion.create(VStack);

const HintCard = () => {
  const hint = useSelectedHint();
  const pokeball = "/assets/pokeball.png";

  return (
    <AnimatePresence mode="wait">
      {!hint ? (
        <MotionVStack
          key="placeholder"
          width={{ base: "95%", md: "500px" }}
          height="180px"
          justify="center"
          bgGradient="linear(to-t, custom.primaryLight 35%, #0040bf)"
          border="4px solid"
          borderColor="custom.primaryBorder"
          borderRadius="sm"
          boxShadow="5px 10px 20px rgba(0, 0, 0, 0.7)"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.1 }}
        >
          <Image src={pokeball} boxSize="110px" alt="Pokeball Placeholder" />
        </MotionVStack>
      ) : (
        <MotionVStack
          key={hint.id}
          width={{ base: "95%", md: "500px" }}
          height="180px"
          bgGradient="linear(to-t, custom.primaryLight 35%, #0040bf)"
          border="4px solid"
          borderColor="custom.primaryBorder"
          borderRadius="sm"
          boxShadow="5px 10px 20px rgba(0, 0, 0, 0.7)"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.1 }}
        >
          <HStack
            width="100%"
            borderBottom="3px dotted"
            borderColor="custom.primaryBorder"
          >
            <Image
              objectFit="cover"
              boxSize="110px"
              src={`/assets/pokemon/${hint.id}.png`}
              alt="The Guessed Pokemon"
            />
            <VStack flexGrow={1}>
              <HintCardTypes types={hint.types} />
              <HStack justify="space-around" width="100%">
                <HintCardAttribute
                  attribute={hint.shape}
                  name="Shape"
                  hasImg={true}
                  hasText={false}
                />
                <HintCardAttribute
                  attribute={hint.color}
                  name="Color"
                  hasImg={false}
                  hasText={false}
                />
                <HintCardAttribute
                  attribute={hint.generation}
                  name="Gen"
                  hasImg={false}
                  hasText={true}
                />
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
  );
};

export default HintCard;
