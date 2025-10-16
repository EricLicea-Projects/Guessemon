import { useRef, useState } from "react";
import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

import Pokedex from "./pokedex/Pokedex";
import ClearInputButton from "./ClearInputButton";
import AutoCompleteList from "./AutoCompleteList";

import { pokemonList, Pokemon } from "@/data/pokemonData";
import { usePokemonSuggestions } from "@/hooks/usePokemonSuggestions";
import { useAutocompleteKeyboard } from "@/hooks/useAutocompleteKeyboard";

type Props = {
  onSelect: (selected: Pokemon) => void;
  isMobile: boolean;
};

const GuessInput = ({ onSelect, isMobile }: Props) => {
  const [guess, setGuess] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const blurInput = () => {
    const el = inputRef.current;
    if (!el) return;
    el.blur();
    setTimeout(() => el.blur(), 0);
  };

  const handleSelection = (selected: Pokemon) => {
    blurInput();
    setGuess(selected.name);
    onSelect(selected);
    setGuess("");
  };

  const suggestions = usePokemonSuggestions(guess, pokemonList);
  const kb = useAutocompleteKeyboard<Pokemon>(suggestions, handleSelection);

  return (
    <Box position="relative" width={{ base: "80%", md: "300px" }}>
      {isMobile && (
        <Box
          position="absolute"
          left="-35px"
          top="50%"
          transform="translateY(-70%)"
          zIndex="2"
        >
          <Pokedex />
        </Box>
      )}
      <InputGroup zIndex="1">
        <Input
          ref={inputRef}
          value={guess}
          layerStyle="pokeBallFrame"
          variant="outline"
          border="3px double"
          borderColor="inputBoxColor"
          borderRadius="3xl"
          textAlign="center"
          placeholder="Guess"
          _placeholder={{
            fontSize: "sm",
            transform: { base: "translateX(0px)", xl: "translate(10px)" },
            color: "textColor",
            opacity: 0.7,
            transition: "opacity .3s ease",
          }}
          _focus={{
            borderColor: "focusColor",
            boxShadow:
              "0 0 0 1px var(--chakra-colors-focusColor), 0 0 6px var(--chakra-colors-focusColor), 0 0 14px var(--chakra-colors-focusColor)",
            _placeholder: { opacity: 0 },
            outline: "none",
          }}
          _hover={{ borderColor: "focusColor" }}
          transition="border-color .5s ease, box-shadow .5s ease"
          transform={{ base: "translateX(10px)", xl: "translate(0px)" }}
          onChange={(event) => setGuess(event.target.value)}
          enterKeyHint="go"
          autoCorrect="off"
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
