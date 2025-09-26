import HintCardShell from "./HintCardShell";
import HintCardPlaceholder from "./HintCardPlaceholder";
import HintCardContent from "./HintCardContent";
import { AnimatePresence } from "framer-motion";

import type { Hints } from "@/hooks/useHintStore";

type Props = {
  hint?: Hints | null;
};

const HintCard = ({ hint }: Props) => {
  return (
    <HintCardShell>
      <AnimatePresence mode="wait" initial={false}>
        {hint ? (
          <HintCardContent key={`hint-${hint.id}`} hint={hint} />
        ) : (
          <HintCardPlaceholder key="placeholder" />
        )}
      </AnimatePresence>
    </HintCardShell>
  );
};

export default HintCard;
