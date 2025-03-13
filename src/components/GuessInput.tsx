import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";

import Pokedex from "./Pokedex";
import ClearInputButton from "./ClearInputButton";
import AutoCompleteList from "./AutoCompleteList";

import { pokemonList, Pokemon } from "@/data/pokemonData";

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

  return (
    <Box position="relative" width={{ base: "80%", lg: "300px" }}>
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
          bg="custom.primaryLight"
          color="custom.text"
          fontSize="md"
          textAlign="center"
          placeholder="Guess"
          _placeholder={{
            transform: "translateX(13px)",
            color: "custom.text",
            opacity: 0.6,
          }}
          _hover={{ bg: "custom.secondary" }}
          _focus={{
            bg: "custom.secondary",
            borderColor: "custom.primaryBorder",
            _placeholder: { opacity: 0 },
          }}
          borderRadius="3xl"
          borderColor="custom.primaryBorder"
          size="lg"
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
        />
        <InputRightElement top="50%" transform="translateY(-50%)">
          {guess && <ClearInputButton onClear={() => setGuess("")} />}
        </InputRightElement>
        <AutoCompleteList
          guess={guess}
          data={pokemonList}
          onSelect={handleSelection}
        />
      </InputGroup>
    </Box>
  );
};

export default GuessInput;
