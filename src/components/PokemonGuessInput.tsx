import { Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import question from "../assets/question.png";

const PokemonGuessInput = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        top="50%"
        left="3px"
        transform="translateY(-50%)"
      >
        <Image boxSize="40px" src={question} />
      </InputLeftElement>
      <Input
        color="teal"
        focusBorderColor="teal.500"
        borderRadius={20}
        placeholder="Guess the Pokemon"
        _placeholder={{ opacity: 0.5, color: "inherit" }}
        size="lg"
        variant="filled"
      />
    </InputGroup>
  );
};

export default PokemonGuessInput;
