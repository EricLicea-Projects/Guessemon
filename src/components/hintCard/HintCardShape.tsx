import HintChip from "./HintChip";

type Props = {
  shapeName: string;
  isShared: boolean;
};

const SHAPE: Record<string, string> = {
  armor: "Insectoid ",
  arms: "Arms",
  ball: "Round",
  blob: "Amorphous",
  "bug-wings": "Bug Wings",
  fish: "Fishlike",
  heads: "Multi-Headed",
  humanoid: "Humanoid",
  legs: "Bipedal",
  quadruped: "Four-Legged",
  squiggle: "Serpentine",
  tentacles: "Tentacled",
  upright: "Tailed",
  wings: "Wings",
};

const HintCardShape = ({ shapeName, isShared }: Props) => {
  return (
    <HintChip
      label={SHAPE[shapeName]}
      isOn={isShared}
      showShape
      shapeImg={shapeName}
    />
  );
};

export default HintCardShape;
