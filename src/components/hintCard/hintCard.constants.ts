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

export type AttrKey = "shape" | "color" | "generation";

export interface AttrConfig {
  key: AttrKey;
  name: string;
  hasImg?: boolean;
  hasText?: boolean;
}

export const ATTRS: ReadonlyArray<AttrConfig> = [
  { key: "shape", name: "Shape", hasImg: true },
  { key: "color", name: "Color" },
  { key: "generation", name: "Gen", hasText: true },
] as const;
