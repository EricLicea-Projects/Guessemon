import HintChip from "./HintChip";

type Props = {
  color: string;
  isShared: boolean;
};

const LABEL = "Color";

const COLOR_HEX: Record<string, string> = {
  black: "#121212",
  blue: "#0008a1",
  brown: "#452d14",
  gray: "#575757",
  green: "#00700d",
  pink: "#ffaddd",
  purple: "#6d0075",
  red: "#570000",
  white: "#ffffff",
  yellow: "#ffe600",
};

const HintCardColor = ({ color, isShared }: Props) => {
  return (
    <HintChip
      label={LABEL}
      isOn={isShared}
      showDot
      dotColor={COLOR_HEX[color]}
    />
  );
};

export default HintCardColor;
