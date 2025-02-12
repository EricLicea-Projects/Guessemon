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
      position="absolute"
      top="100%"
      left="0"
      right="0"
      zIndex="1"
      borderRadius="md"
      boxShadow="md"
      maxH="200px"
      overflowY="auto"
    >
      <VStack spacing={1} align="stretch">
        {filteredSuggestions.map((pokemon) => (
          <HStack
            key={pokemon.id}
            p={2}
            borderRadius="md"
            _hover={{ bg: "gray.700", cursor: "pointer" }}
            onClick={() => onSelect(pokemon)}
            spacing={0}
          >
            <Image
              boxSize="60px"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
            <Text
              color="teal.200"
              fontSize="lg"
              fontFamily='"Press Start 2P", cursive'
            >
              {pokemon.name}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default AutoCompleteList;
