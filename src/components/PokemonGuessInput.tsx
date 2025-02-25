import {
  Box,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

import question from "../assets/question.png";
import ClearInputButton from "./ClearInputButton";
import AutoCompleteList from "./AutoCompleteList";
import HintCard from "./HintCard";

import { pokemonList, Pokemon } from "@/data/pokemonData";
import useSendGuess from "@/hooks/useSendGuess";

const PokemonGuessInput = () => {
  const [guess, setGuess] = useState<string>("");
  const { sendGuess, error } = useSendGuess();

  // This function will be called when the user clicks on a Pokémon from the autocomplete list.
  const handleSelection = async (selected: Pokemon) => {
    // Optionally update the input with the selected Pokemon's name:
    setGuess(selected.name);

    // Immediately send the guess using the Pokémon id.
    console.log("User selected Pokemon ID:", selected.id);
    const result = await sendGuess(selected.id);
    console.log("Backend response:", result);
  };

  return (
    <Box position="relative" width="300px">
      <InputGroup size="lg" zIndex="1" mb={5}>
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
        <AutoCompleteList
          guess={guess}
          data={pokemonList}
          onSelect={handleSelection}
        />
      </InputGroup>
      <HintCard />
    </Box>
  );
};

export default PokemonGuessInput;
