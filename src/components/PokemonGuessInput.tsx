import {
  Button,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import question from "../assets/question.png";

const PokemonGuessInput = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <InputGroup size="lg" width="300px">
        <InputLeftElement
          pointerEvents="none"
          top="50%"
          left="1px" // Moves the icon 10px to the right
          transform="translateY(-50%)"
        >
          <Image boxSize="40px" src={question} />
        </InputLeftElement>
        <Input
          placeholder="Guess a Pokemon"
          focusBorderColor="teal.500"
          variant="filled"
          borderRadius={20}
          size="lg"
        />
        <InputRightElement width="4.5rem">
          <Button
            colorScheme="teal"
            variant="outline"
            size="sm"
            borderRadius="full"
            h="3rem"
            w="5rem"
            onClick={() => {
              // Optional: handle click here if needed
            }}
          >
            Guess
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  );
};

export default PokemonGuessInput;
