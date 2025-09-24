import { HStack, Image } from "@chakra-ui/react";
import { TypesHint } from "@/hooks/useHintStore";

type Props = {
  types: TypesHint;
};

const HintCardTypes = ({ types }: Props) => {
  const { shared, guess, guess_single, both_single } = types;
  const typeOneImg = `/assets/types/${guess[0]}.png`;
  const typeTwoImg = `/assets/types/${guess_single ? "none" : guess[1]}.png`;

  const typeOneCorrect = shared.includes(guess[0]);
  const typeTwoCorrect = both_single ? true : shared.includes(guess[1]);

  const filterValue1 = typeOneCorrect
    ? "none"
    : "grayscale(100%) brightness(0.8)";
  const filterValue2 = typeTwoCorrect
    ? "none"
    : "grayscale(100%) brightness(0.8)";
  return (
    <HStack>
      <Image
        src={typeOneImg}
        alt="Pokemon Type"
        width="100px"
        objectFit="contain"
        filter={filterValue1}
      />
      <Image
        src={typeTwoImg}
        alt="Pokemon Type"
        width="100px"
        objectFit="contain"
        borderRadius="full"
        filter={filterValue2}
      />
    </HStack>
  );
};

export default HintCardTypes;
