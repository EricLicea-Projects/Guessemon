import { memo } from "react";
import HintChip from "./HintChip";
import { GEN_TO_REGION, type RegionName } from "@/data/regions";

type Props = {
  generation: string;
  isShared: boolean;
};

const ROMAN_TO_INT: Record<string, number> = {
  i: 1,
  ii: 2,
  iii: 3,
  iv: 4,
  v: 5,
  vi: 6,
  vii: 7,
  viii: 8,
  ix: 9,
};

const parseGeneration = (gen: string): number => {
  const roman = gen.split("generation-")[1].toLowerCase();
  return ROMAN_TO_INT[roman];
};

const HintCardRegion = memo(({ generation, isShared }: Props) => {
  const genNumber = parseGeneration(generation);
  const region = GEN_TO_REGION[genNumber] as RegionName;
  return <HintChip label={region} isOn={isShared} />;
});

export default HintCardRegion;
