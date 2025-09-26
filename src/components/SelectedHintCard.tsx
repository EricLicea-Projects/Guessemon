import { useSelectedHint } from "@/hooks/useSelectedHint";
import HintCard from "./hintCard/HintCard";

const SelectedHintCard = () => {
  const hint = useSelectedHint();
  return <HintCard hint={hint ?? null} />;
};

export default SelectedHintCard;
