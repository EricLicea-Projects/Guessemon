import { keyframes } from "@emotion/react";
import { Text } from "@chakra-ui/react";

const pulseNoScale = keyframes`
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 5px custom.primary;
  }
  50% {
    opacity: 0.7;
    text-shadow: 0 0 20px custom.primary;
  }
`;

const PulsingText = () => {
  return (
    <Text
      p={1.5}
      fontFamily='"Press Start 2P", cursive'
      fontSize={{ base: "md", lg: "xl" }}
      fontWeight="bold"
      color="custom.primary"
      whiteSpace="nowrap"
      animation={`${pulseNoScale} 2s ease-in-out infinite`}
    >
      Guess That Pokémon!
    </Text>
  );
};

export default PulsingText;
