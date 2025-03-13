import { VStack, Box, Text, HStack, Image } from "@chakra-ui/react";
import { Pokemon } from "@/data/pokemonData";

interface Props {
  guess: string;
  data: Pokemon[];
  onSelect: (value: Pokemon) => void;
}

const AutoCompleteList = ({ guess, data, onSelect }: Props) => {
  const filteredSuggestions = guess.trim()
    ? data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(guess.toLowerCase())
      )
    : [];

  if (!guess || filteredSuggestions.length === 0) {
    return null;
  }

  return (
    <Box
      bg="custom.primaryLight"
      position="absolute"
      top="100%"
      left="0"
      right="0"
      zIndex="1000"
      borderRadius="2xl"
      maxH="200px"
      overflowY="auto"
    >
      <VStack spacing={1} align="stretch">
        {filteredSuggestions.map((pokemon) => (
          <HStack
            key={pokemon.id}
            p={2}
            spacing={0}
            borderBottom="1px solid"
            borderColor="custom.primaryBorder"
            _hover={{ bg: "custom.secondary", cursor: "pointer" }}
            onClick={() => onSelect(pokemon)}
          >
            <Image
              boxSize="60px"
              src={`/assets/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
            <Text color="custom.text" fontSize="xl">
              {pokemon.name}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default AutoCompleteList;
