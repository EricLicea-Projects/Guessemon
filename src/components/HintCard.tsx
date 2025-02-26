import { Box, Divider, HStack, Image, Text, VStack } from "@chakra-ui/react";

const HintCard = () => {
  const imageURL = `/assets/pokemon/9.png`;
  const typeOne = "/assets/types/normal.png";
  const typeTwo = "/assets/types/fire.png";
  const shape = "/assets/shapes/upright.png";

  const isCorrect = true;

  const bgColor = isCorrect ? "rgb(0, 134, 0)" : "rgb(148, 0, 0)";
  const glow = isCorrect ? `0 0 8px 2px ${bgColor}` : `0 0 8px 2px ${bgColor}`;

  return (
    <VStack
      width={{ base: "95%", md: "500px" }}
      bg="custom.secondary"
      border="3px solid"
      borderColor="custom.accentDark"
      borderRadius="md"
      boxShadow="5px 10px 20px rgba(0, 0, 0, 0.7)"
    >
      <HStack width="100%">
        <Image
          objectFit="cover"
          boxSize="110px"
          src={imageURL}
          alt="The Guessed Pokemon"
        />
        <VStack flexGrow={1}>
          <HStack>
            <VStack>
              <Box bg={bgColor} boxShadow={glow} borderRadius="md">
                <Image
                  src={typeOne}
                  alt="Pokemon Type"
                  width="100px"
                  objectFit="contain"
                />
              </Box>
            </VStack>
            <VStack>
              <Box bg={bgColor} boxShadow={glow} borderRadius="md">
                <Image
                  src={typeTwo}
                  alt="Pokemon Type"
                  width="100px"
                  objectFit="contain"
                />
              </Box>
            </VStack>
          </HStack>
          <HStack justify="space-around" width="100%">
            <VStack gap={1}>
              <Text
                color="custom.primary"
                fontSize="xs"
                fontFamily='"Press Start 2P", cursive'
              >
                Shape
              </Text>
              <Box
                bg={bgColor}
                border="1px solid"
                borderColor={bgColor}
                borderRadius="md"
                boxSize="40px"
              >
                <Image src={shape} alt="Pokemon Shape" objectFit="contain" />
              </Box>
            </VStack>
            <VStack gap={1}>
              <Text
                color="custom.primary"
                fontSize="xs"
                fontFamily='"Press Start 2P", cursive'
              >
                Color
              </Text>
              <Box
                bg="blue"
                border="2px solid"
                borderColor={bgColor}
                borderRadius="md"
                boxSize="40px"
              ></Box>
            </VStack>
            <VStack gap={1}>
              <Text
                color="custom.primary"
                fontSize="xs"
                fontFamily='"Press Start 2P", cursive'
              >
                Gen
              </Text>
              <Box
                bg={bgColor}
                border="1px solid"
                borderColor={bgColor}
                borderRadius="md"
                boxSize="40px"
              >
                <Text
                  color="custom.primary"
                  fontSize="xs"
                  fontFamily='"Press Start 2P", cursive'
                >
                  1
                </Text>
              </Box>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
      <Divider
        borderColor="custom.accentDark"
        borderWidth="1px"
        orientation="horizontal"
        my={1} // adds vertical margin
      />
      <Text
        color="custom.primary"
        fontSize="xs"
        fontFamily='"Press Start 2P", cursive'
      >
        Blastoise is heavier and taller.
      </Text>
    </VStack>
  );
};

export default HintCard;
