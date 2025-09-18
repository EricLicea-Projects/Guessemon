import HintCardShell from "./HintCardShell";
import HintCardPlaceholder from "./HintCardPlaceholder";
import HintCardContent from "./HintCardContent";
import { useSelectedHint } from "../../hooks/useSelectedHint";

const HintCard = () => {
  const hint = useSelectedHint();

  return (
    <HintCardShell>
      {hint ? <HintCardContent hint={hint} /> : <HintCardPlaceholder />}
    </HintCardShell>
  );
};

export default HintCard;
