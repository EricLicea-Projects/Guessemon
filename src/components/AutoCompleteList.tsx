import { VStack, Box, Text, HStack, Image } from "@chakra-ui/react";
import { Pokemon } from "@/data/pokemonData";

type KeyboardWiring = {
  activeIndex: number;
  getItemProps: (index: number) => {
    id: string;
    role: "option";
    "aria-selected": boolean;
    getRef: (el: HTMLElement | null) => void;
    onMouseEnter: () => void;
    onMouseDown: (e: React.MouseEvent) => void;
  };
  listProps: {
    role: "listbox";
    id: string;
  };
};

type Props = {
  suggestions: Pokemon[];
  keyboard: KeyboardWiring;
};

const AutoCompleteList = ({ suggestions, keyboard }: Props) => {
  if (suggestions.length === 0) return null;

  const { activeIndex, getItemProps, listProps } = keyboard;

  return (
    <Box
      position="absolute"
      layerStyle="pokeBallFrame"
      border="none"
      top="100%"
      left="2"
      right="0"
      zIndex="1000"
      borderRadius="lg"
      maxH="200px"
      overflowY="auto"
      sx={{
        scrollbarGutter: "stable",
        scrollbarWidth: "thin",
        scrollbarColor: "var(--chakra-colors-teal-400) rgba(255,255,255,0.06)",
        overscrollBehavior: "contain",
      }}
      {...listProps}
    >
      <VStack spacing={1} align="stretch">
        {suggestions.map((pokemon, i) => {
          const { getRef, ...optionProps } = getItemProps(i);
          const isActive = i === activeIndex;

          return (
            <HStack
              key={pokemon.id}
              p={2}
              spacing={0}
              borderBottom="1px solid teal"
              _hover={{ bg: "highlight", cursor: "pointer" }}
              bg={isActive ? "highlight" : undefined}
              ref={getRef}
              {...optionProps}
            >
              <Image
                boxSize="60px"
                src={`/assets/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              <Text fontSize="xl">{pokemon.name}</Text>
            </HStack>
          );
        })}
      </VStack>
    </Box>
  );
};

export default AutoCompleteList;
