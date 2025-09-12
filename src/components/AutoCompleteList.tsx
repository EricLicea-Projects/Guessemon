import { VStack, Box, Text, HStack, Image } from "@chakra-ui/react";
import { Pokemon } from "@/data/pokemonData";
import { usePokemonSuggestions } from "@/hooks/usePokemonSuggestions";

interface Props {
  guess: string;
  data: Pokemon[];
  onSelect: (value: Pokemon) => void;
}

const AutoCompleteList = ({ guess, data, onSelect }: Props) => {
  const suggestions = usePokemonSuggestions(guess, data);

  if (!guess || suggestions.length === 0) return null;

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
        {suggestions.map((pokemon) => (
          <HStack
            key={pokemon.id}
            p={2}
            spacing={0}
            borderBottom="1px solid"
            borderColor="custom.primaryBorder"
            _hover={{ bg: "custom.secondary", cursor: "pointer" }}
            onMouseDown={(e) => {
              e.preventDefault();
              onSelect(pokemon);
            }}
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
