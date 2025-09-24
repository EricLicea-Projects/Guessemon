import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionVStack = motion.create(VStack);

export const CARD_WIDTH = { base: "95%", md: "500px" } as const;
export const CARD_HEIGHT = "180px";

export const contentVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
} as const;
