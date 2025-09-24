import { MotionVStack, CARD_HEIGHT, CARD_WIDTH } from "./hintCard.constants";

const HintCardShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionVStack
      width={CARD_WIDTH}
      height={CARD_HEIGHT}
      position="relative"
      bgGradient="linear-gradient(180deg, #0E0F1A 0%, #0A0C16 100%)"
      border="3px solid transparent"
      borderRadius="sm"
      boxShadow="5px 10px 20px rgba(0, 0, 0, 0.7)"
      sx={{
        borderImageSlice: 1,
        borderImageSource: `
          conic-gradient(
            from 90deg at 50% 50%,
            transparent 2deg 0deg,
            var(--chakra-colors-gray-100) 12deg 168deg,
            transparent 179deg 180deg,
            var(--chakra-colors-red-400) 192deg 348deg,
            transparent 360deg 360deg
          )
        `,
      }}
      initial={false}
      layout
      role="group"
      aria-label="Guessamon hint card"
      _before={{
        content: '""',
        pointerEvents: "none",
        position: "absolute",
        inset: 0,
        backgroundImage:
          "repeating-linear-gradient(180deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 8px)",
        opacity: 0.5,
        borderRadius: "inherit",
      }}
    >
      {children}
    </MotionVStack>
  );
};

export default HintCardShell;
