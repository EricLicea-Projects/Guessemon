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

const PokemonGuessInput = () => {
  const [guess, setGuess] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("User Guess: ", guess);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup size="lg" width="300px">
        <InputLeftElement
          pointerEvents="none"
          top="50%"
          left="1px"
          transform="translateY(-50%)"
        >
          <Image boxSize="40px" src={question} alt="Pokeball Icon" />
        </InputLeftElement>
        <Input
          placeholder="Guess a Pokemon"
          focusBorderColor="teal.500"
          variant="filled"
          borderRadius={20}
          size="lg"
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
        />
        <InputRightElement>
          <ClearInputButton onClear={() => setGuess("")} />
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default PokemonGuessInput;
