import { HStack, Icon, Text } from "@chakra-ui/react";
import { GiWeight, GiRockGolem } from "react-icons/gi";
import type { IconType } from "react-icons";

type Props = {
  variant: "Weight" | "Height";
  value?: number;
};

const ICON_BY_VARIANT: Record<Props["variant"], IconType> = {
  Weight: GiWeight,
  Height: GiRockGolem,
};

const PokedexChip = ({ variant, value = 0 }: Props) => {
  const IconComp = ICON_BY_VARIANT[variant];

  return (
    <HStack
      spacing={2}
      align="center"
      whiteSpace="nowrap"
      aria-label={`${variant} ${value}`}
    >
      <Icon as={IconComp} boxSize="20px" aria-hidden />
      <Text fontSize="12px" lineHeight="1" aria-hidden mt={1}>
        {value}
        {variant == "Height" ? " M" : ""}
      </Text>
    </HStack>
  );
};

export default PokedexChip;
