import { MotionVStack, CARD_HEIGHT, CARD_WIDTH } from "./hintCard.constants";

type Props = {
  children: React.ReactNode;
};

const HintCardShell = ({ children }: Props) => {
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
      role="group"
      aria-label="Guessamon hint card"
    >
      {children}
    </MotionVStack>
  );
};

export default HintCardShell;
