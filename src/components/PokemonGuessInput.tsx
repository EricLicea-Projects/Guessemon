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
import { Pokemon, pokemonList } from "@/data/pokemonData";

const PokemonGuessInput = () => {
  const [guess, setGuess] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("User Guess: ", guess);
  };

  const handleSelectSuggestion = (selected: Pokemon) => {
    setGuess(selected.name);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ position: "relative", width: "300px" }}
    >
      <InputGroup size="lg">
        <InputLeftElement
          pointerEvents="none"
          top="50%"
          left="5px"
          transform="translateY(-50%)"
        >
          <Image boxSize="40px" src={question} alt="Pokeball Icon" />
        </InputLeftElement>
        <Input
          textAlign="center"
          color="teal.300"
          fontSize="md"
          fontFamily='"Press Start 2P", cursive'
          placeholder="Guess"
          _placeholder={{ color: "teal.700" }}
          focusBorderColor="teal.500"
          variant="filled"
          borderRadius="md"
          size="lg"
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
        />
        <InputRightElement>
          {guess && <ClearInputButton onClear={() => setGuess("")} />}
        </InputRightElement>
      </InputGroup>
      <AutoCompleteList
        guess={guess}
        data={pokemonList}
        onSelect={handleSelectSuggestion}
      />
    </form>
  );
};

export default PokemonGuessInput;
