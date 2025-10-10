import { MotionVStack, CARD_HEIGHT, CARD_WIDTH } from "./hintCard.constants";

type Props = {
  children: React.ReactNode;
};

const HintCardShell = ({ children }: Props) => {
  return (
    <MotionVStack
      layerStyle="pokeBallFrame"
      width={CARD_WIDTH}
      height={CARD_HEIGHT}
      overflow="hidden"
      position="relative"
      borderRadius="sm"
      boxShadow="5px 10px 20px rgba(0, 0, 0, 0.7)"
      initial={false}
      layout
      role="group"
      aria-label="Guessamon hint card"
    >
      {children}
    </MotionVStack>
  );
};

export default HintCardShell;
