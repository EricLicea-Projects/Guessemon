import { Image, VStack, Text, HStack } from "@chakra-ui/react";
import { useState, useRef } from "react";

import HintCard from "./HintCard";

import { Pokemon } from "@/data/pokemonData";
import useSendGuess, { Hints, PokemonResponse } from "@/hooks/useSendGuess";
import GuessInput from "./GuessInput";

const GuessingGame = () => {
  const { sendGuess } = useSendGuess();
  const [hints, setHints] = useState<Hints[]>([]);
  const [pokeOfDay, setPokeOfDay] = useState<Pokemon>({
    id: 0,
    name: "unknown",
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // Variables to track dragging state
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      setIsDragging(true);
      // Record the initial mouse position and scroll position
      setStartY(e.pageY);
      setScrollStart(containerRef.current.scrollTop);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    // Calculate the difference between the current and initial mouse positions
    const deltaY = e.pageY - startY;
    // Update the scroll position of the container
    containerRef.current.scrollTop = scrollStart - deltaY;
  };

  const stopDragging = () => {
    setIsDragging(false);
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
      <VStack
        ref={containerRef}
        py={3}
        spacing={3}
        width={{ base: "100%", lg: "550px" }}
        height={{ base: "400px", lg: "500px" }}
        overflowY="scroll"
        overflowX="hidden"
        sx={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%)",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          cursor: isDragging ? "grabbing" : "grab",
          // Prevent text selection while dragging
          userSelect: isDragging ? "none" : "auto",
          WebkitUserSelect: isDragging ? "none" : "auto",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        {[...hints].reverse().map((hint, index) => (
          <HintCard key={index} hints={hint} />
        ))}
      </VStack>
    </VStack>
  );
};

export default GuessingGame;
