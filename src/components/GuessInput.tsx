import {
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

import question from "../assets/question.png";
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
    <InputGroup size="lg" zIndex="1" mb={5} width="300px">
      <InputLeftElement
        pointerEvents="none"
        top="50%"
        left="5px"
        transform="translateY(-50%)"
      >
        <Image boxSize="40px" src={question} alt="Pokeball Icon" />
      </InputLeftElement>
      <Input
        bg="custom.secondary"
        color="custom.primary"
        fontSize="md"
        textAlign="center"
        fontFamily='"Press Start 2P", cursive'
        placeholder="Guess"
        _placeholder={{ color: "custom.primary", opacity: 0.8 }}
        variant="filled"
        _hover={{ bg: "custom.secondaryLight" }}
        _focus={{
          bg: "custom.secondaryLight",
          borderColor: "custom.accent",
        }}
        borderRadius="md"
        size="lg"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
      />
      <InputRightElement>
        {guess && <ClearInputButton onClear={() => setGuess("")} />}
      </InputRightElement>
      <AutoCompleteList
        guess={guess}
        data={pokemonList}
        onSelect={handleSelection}
      />
    </InputGroup>
  );
};

export default GuessInput;
