import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

import Pokedex from "./Pokedex";
import ClearInputButton from "./ClearInputButton";
import AutoCompleteList from "./AutoCompleteList";

import { pokemonList, Pokemon } from "@/data/pokemonData";
import { usePokemonSuggestions } from "@/hooks/usePokemonSuggestions";
import { useAutocompleteKeyboard } from "@/hooks/useAutocompleteKeyboard";

interface GuessInputProps {
  onSelect: (selected: Pokemon) => void;
}

const GuessInput = ({ onSelect }: GuessInputProps) => {
  const [guess, setGuess] = useState<string>("");

  const handleSelection = (selected: Pokemon) => {
    setGuess(selected.name);
    onSelect(selected);
    setGuess("");
  };

  const suggestions = usePokemonSuggestions(guess, pokemonList);

  const kb = useAutocompleteKeyboard<Pokemon>(suggestions, handleSelection);

  return (
    <Box position="relative" width={{ base: "80%", md: "300px" }}>
      <Box
        position="absolute"
        left="-35px"
        top="50%"
        transform="translateY(-70%)"
        zIndex="2"
      >
        <Pokedex />
      </Box>
      <InputGroup zIndex="1">
        <Input
          variant="outline"
          size={{ base: "md", lg: "md" }}
          bg="custom.primaryLight"
          color="custom.text"
          fontSize={{ base: "md", lg: "md" }}
          textAlign="center"
          placeholder="Guess"
          _placeholder={{
            transform: "translateX(10px)",
            color: "custom.text",
            opacity: 0.6,
          }}
          _hover={{ bg: "custom.secondary" }}
          _focus={{
            bg: "custom.secondary",
            borderColor: "custom.primaryBorder",
            _placeholder: { opacity: 0 },
          }}
          transform="translateX(10px)"
          borderRadius="3xl"
          borderColor="custom.primaryBorder"
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
          {...kb.inputAriaProps}
        />
        <InputRightElement top="50%" transform="translateY(-50%)">
          {guess && <ClearInputButton onClear={() => setGuess("")} />}
        </InputRightElement>

        <AutoCompleteList suggestions={suggestions} keyboard={kb} />
      </InputGroup>
    </Box>
  );
};

export default GuessInput;
