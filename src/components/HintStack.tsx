import { VStack } from "@chakra-ui/react";
import HintCard from "./hintCard/HintCard";
import useHintStore from "@/hooks/useHintStore";

type Props = { start: 0 | 3 };

const HINT_CARDS_PER_STACK = 3;

const HintStack = ({ start }: Props) => {
  const hints = useHintStore((s) => s.hints);

  return (
    <VStack spacing={10} align="stretch">
      {Array.from({ length: HINT_CARDS_PER_STACK }, (_, i) => {
        const slotIndex = start + i;
        const hint = hints[slotIndex] ?? null;
        return <HintCard key={`slot-${slotIndex}`} hint={hint} />;
      })}
    </VStack>
  );
};

export default HintStack;
