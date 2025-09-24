import { memo } from "react";
import { Box, Text, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

type Props = {
  label: string;
  isOn?: boolean;
  minW?: string | number;
  showDot?: boolean;
  dotColor?: string;
  showShape?: boolean;
  shapeImg?: string;
};

const DEFAULT_ACCENT = "#00ff0d";
const DEFAULT_ACCENT_LIGHT = "#00d90b";
const DEFAULT_ACCENT_GLOW = "rgba(0, 255, 13, 0.7)";
const DEFAULT_OFF = "#808080";

const HintChip = memo(
  ({
    label,
    isOn = false,
    minW = "112px",
    showDot = false,
    dotColor,
    showShape = false,
    shapeImg,
  }: Props) => {
    const dotBG = dotColor ?? "#00b7ffff";

    return (
      <MotionBox
        role="group"
        position="relative"
        px={3}
        py={1.5}
        minW={minW}
        rounded="2xl"
        border="3px solid"
        borderColor={DEFAULT_OFF}
        overflow="hidden"
        sx={{
          clipPath:
            "polygon(0% 8px, 8px 8px, 8px 0%, calc(100% - 8px) 0%, calc(100% - 8px) 8px, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 8px calc(100% - 8px), 0% calc(100% - 8px))",
          willChange: "border-color, box-shadow, transform",
          contain: "paint",
        }}
        initial={false}
        animate={isOn ? "on" : "off"}
        variants={{
          on: {
            borderColor: DEFAULT_ACCENT_LIGHT,
            boxShadow: `0 0 6px ${DEFAULT_ACCENT_GLOW}`,
            transition: {
              borderColor: { duration: 0.15 },
              boxShadow: { duration: 0.35 },
              type: "spring",
              stiffness: 220,
              damping: 20,
            },
          },
          off: {
            borderColor: DEFAULT_OFF,
            boxShadow: "none",
            transition: { duration: 0.2 },
          },
        }}
      >
        <HStack spacing={2} align="center">
          <Text
            fontSize="md"
            fontWeight="700"
            letterSpacing="wide"
            userSelect="none"
            noOfLines={1}
            color={isOn ? DEFAULT_ACCENT : DEFAULT_OFF}
            transition="color .15s ease, text-shadow .15s ease"
            style={{
              textShadow: isOn ? `0 0 3px ${DEFAULT_ACCENT_GLOW}` : "none",
            }}
          >
            {label}
          </Text>
          {showDot && (
            <Box
              boxSize="14px"
              rounded="full"
              bg={dotBG}
              border="1px solid rgba(0,0,0,0.7)"
            />
          )}
          {showShape && (
            <Box
              aria-label={`${label} shape`}
              boxSize="45px"
              bg={isOn ? DEFAULT_ACCENT : DEFAULT_OFF}
              sx={{
                WebkitMaskImage: `url(/assets/shapes/${shapeImg}.png)`,
                maskImage: `url(/assets/shapes/${shapeImg}.png)`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center",
                maskPosition: "center",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                imageRendering: "pixelated",
              }}
            />
          )}
        </HStack>
      </MotionBox>
    );
  }
);

export default HintChip;
