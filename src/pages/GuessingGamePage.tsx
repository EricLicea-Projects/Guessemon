import { VStack, HStack, useBreakpointValue } from "@chakra-ui/react";
import { useShallow } from "zustand/shallow";

import GuessInput from "../components/GuessInput";
import CountdownTimer from "@/components/CountdownTimer";
import PokeRevelation from "@/components/pokeRevelation/PokeRevelation";
import PokeballHintGrid from "@/components/PokeballHintGrid";

import useGuessHandler from "@/hooks/useGuessHandler";
import useHintStore from "@/hooks/useHintStore";
import useGetPokeOfDay from "@/hooks/useGetPokeOfDay";
import HintStack from "@/components/HintStack";
import DesktopPokedex from "@/components/pokedex/DesktopPokedex";
import SelectedHintCard from "@/components/SelectedHintCard";

const MAX_GUESSES = 6;

const GuessingGamePage = () => {
  const { pokemonOfTheDay } = useGetPokeOfDay();
  const { submitGuess } = useGuessHandler();
  const { hints, hasWon } = useHintStore(
    useShallow((state) => ({
      hints: state.hints,
      hasWon: state.correct,
    }))
  );

  const tries = hints.length;
  const hasLost = !hasWon && tries >= MAX_GUESSES;
  const gameOver = hasWon || hasLost;

  const isMobile = useBreakpointValue({ base: true, xl: false }) ?? false;

  return (
    <HStack p={isMobile ? 0 : 3} w="100%" justify="space-evenly">
      {!isMobile && <HintStack start={0} />}
      <VStack
        spacing={{ base: 4, md: 5, lg: 6 }}
        w={{ base: "100%", xl: "auto" }}
      >
        <PokeRevelation
          pokemonOfTheDay={pokemonOfTheDay}
          numOfGuesses={hints.length}
          gameOver={gameOver}
        />
        {gameOver ? (
          <CountdownTimer gameStatus={hasWon ? "won" : "lost"} />
        ) : (
          <GuessInput onSelect={submitGuess} isMobile={isMobile} />
        )}
        {isMobile ? (
          <>
            <PokeballHintGrid />
            <SelectedHintCard />
          </>
        ) : (
          <DesktopPokedex pokemonOfTheDay={pokemonOfTheDay} />
        )}
      </VStack>
      {!isMobile && <HintStack start={3} />}
    </HStack>
  );
};

export default GuessingGamePage;
