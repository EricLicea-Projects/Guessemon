import { VStack, Text, Box, Image } from "@chakra-ui/react";
import { AttributeHint } from "@/hooks/useHintStore";

interface HintCardAttributeProps {
  attribute: AttributeHint;
  name: string;
  hasImg: boolean;
  hasText: boolean;
}

const HintCardAttribute = ({
  attribute,
  name,
  hasImg,
  hasText,
}: HintCardAttributeProps) => {
  const { is_correct, guess } = attribute;
  const shapeImg = `/assets/shapes/${guess}.png`;

  const resultColor = is_correct ? "correct" : "wrong";
  const bgColor = name === "Color" ? `hintColor.${guess}` : "#2b2b2b";

  const convertGeneration = (guess: string): number | string => {
    const roman = guess.replace("generation-", "").toLowerCase();
    const mapping: { [key: string]: number } = {
      i: 1,
      ii: 2,
      iii: 3,
      iv: 4,
      v: 5,
      vi: 6,
      vii: 7,
      viii: 8,
      ix: 9,
      x: 10,
    };
    return mapping[roman] ?? guess;
  };

  return (
    <VStack gap={1}>
      <Text
        color={`custom.${resultColor}`}
        fontSize="xs"
        fontFamily='"Press Start 2P", cursive'
      >
        {name}
      </Text>
      <Box
        bg={bgColor}
        border="3px double"
        borderColor={`custom.${resultColor}`}
        borderRadius="md"
        boxSize="45px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {hasImg && (
          <Image
            src={shapeImg}
            alt="Pokemon Shape"
            objectFit="contain"
            filter="sepia(100%) invert(75%)"
          />
        )}
        {hasText && (
          <Text
            fontSize="xl"
            bgGradient="linear(to-t,rgb(223, 223, 223) 40%,rgb(134, 134, 134))"
            bgClip="text"
            fontWeight="extrabold"
            fontFamily='"Press Start 2P", cursive'
          >
            {convertGeneration(guess)}
          </Text>
        )}
      </Box>
    </VStack>
  );
};

export default HintCardAttribute;
