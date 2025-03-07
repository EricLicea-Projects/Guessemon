import { Image, VStack, Text, HStack } from "@chakra-ui/react";
import { useState } from "react";

import { Pokemon } from "@/data/pokemonData";
import useSendGuess, { Hints, PokemonResponse } from "@/hooks/useSendGuess";
import GuessInput from "../components/GuessInput";
import HintCard from "../components/HintCard";
import HintCardContainer from "@/components/HintCardContainer";

const GuessingGamePage = () => {
  const { sendGuess } = useSendGuess();
  const [hints, setHints] = useState<Hints[]>([]);
  const [pokeOfDay, setPokeOfDay] = useState<Pokemon>({
    id: 0,
    name: "unknown",
  });

  const handleSelection = async (selected: Pokemon) => {
    console.log("User selected Pokemon ID:", selected.id);
    const result: PokemonResponse | undefined = await sendGuess(selected.id);
    if (!result) return;

    console.log("Backend response:", result);

    if (result.correct) {
      setPokeOfDay(selected);
      return;
    }
    setHints((prevHints) => [...prevHints, result.hints]);
  };

  return (
    <VStack py={1} width="100%" height="100%" justifyContent="space-between">
      <HStack
        bg="custom.secondary"
        spacing={3}
        border="5px double"
        borderColor="custom.accentDark"
        height="200px"
        justifyContent="space-around"
        width={{ base: "95%", lg: "500px" }}
        visibility={pokeOfDay.id === 0 ? "hidden" : "visible"}
      >
        <Image
          boxSize="150px"
          src={`/assets/pokemon/${pokeOfDay.id}.png`}
          alt="Pokemon Of The Day"
        />
        <VStack spacing={9}>
          <Text
            fontSize={{ base: "sm", lg: "xl" }}
            bgGradient="linear(to-r, pink, purple, cyan, indigo, teal)"
            bgClip="text"
            fontWeight="extrabold"
            fontFamily='"Press Start 2P", cursive'
          >
            Today's Pokemon
          </Text>
          <Text
            fontSize={{ base: "lg", lg: "2xl" }}
            bgGradient="linear(to-t,rgb(223, 223, 223) 40%,rgb(134, 134, 134))"
            bgClip="text"
            fontWeight="extrabold"
            fontFamily='"Press Start 2P", cursive'
          >
            {pokeOfDay.name}
          </Text>
        </VStack>
      </HStack>
      <GuessInput onSelect={handleSelection} />
      <HintCardContainer>
        {[...hints].reverse().map((hint, index) => (
          <HintCard key={index} hints={hint} />
        ))}
      </HintCardContainer>
    </VStack>
  );
};

export default GuessingGamePage;
