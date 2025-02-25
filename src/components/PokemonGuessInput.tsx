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
    </Box>
  );
};

export default PokemonGuessInput;
