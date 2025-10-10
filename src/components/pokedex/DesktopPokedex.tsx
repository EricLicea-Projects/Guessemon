import { PokeOfTheDay } from "@/hooks/useGetPokeOfDay";
import { Text, VStack, HStack, Image } from "@chakra-ui/react";
import pokedexImg from "@/assets/pokedex.png";
import PokedexChip from "./PokedexChip";
import CryButton from "../cryButton/CryButton";

type Props = {
  pokemonOfTheDay?: PokeOfTheDay;
};

const DesktopPokedex = ({ pokemonOfTheDay }: Props) => {
  return (
    <VStack layerStyle="pokeBallFrame" w="450px">
      <HStack p={3} width="100%" spacing={3} borderBottom="3px dotted silver">
        <Image
          src={pokedexImg}
          boxSize="95px"
          objectFit="contain"
          draggable="false"
        />
        <Text fontSize="xs">
          {pokemonOfTheDay ? pokemonOfTheDay.flavor_text : "No Data"}
        </Text>
      </HStack>
      <HStack px={3} pb={2} width="100%" justify="space-between">
        <PokedexChip variant="Weight" value={pokemonOfTheDay?.weight} />
        <PokedexChip variant="Height" value={pokemonOfTheDay?.height} />
        <CryButton cryId={pokemonOfTheDay?.id} />
      </HStack>
    </VStack>
  );
};

export default DesktopPokedex;
