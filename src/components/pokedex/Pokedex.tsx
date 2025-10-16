import useGetPokeOfDay from "@/hooks/useGetPokeOfDay";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverFooter,
  Image,
  Text,
  IconButton,
  Portal,
  HStack,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

import pokedexImg from "@/assets/pokedex.png";
import { IMAGE_PRESS_MOTION } from "./pokedex.styles";
import CryButton from "../cryButton/CryButton";
import PokedexChip from "./PokedexChip";

const Pokedex = () => {
  const { data } = useGetPokeOfDay();
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Popover placement="top">
      <PopoverTrigger>
        <IconButton
          aria-label="Open Pokedex"
          variant="ghost"
          role="group"
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent" }}
          _focusVisible={{ boxShadow: "outline" }}
          icon={
            <Image
              src={pokedexImg}
              aria-hidden="true"
              boxSize="95px"
              objectFit="contain"
              draggable="false"
            />
          }
        />
      </PopoverTrigger>
      <Portal>
        <PopoverContent layerStyle="pokeBallFrame">
          <PopoverArrow bg="black" />
          <PopoverBody>
            <Text fontSize="xs">{data ? data.flavor_text : "Loading..."}</Text>
          </PopoverBody>
          <PopoverFooter borderTop="3px dotted silver">
            <HStack justify="space-between">
              <PokedexChip variant="Weight" value={data?.weight} />
              <PokedexChip variant="Height" value={data?.height} />
              <CryButton cryId={data?.id} />
            </HStack>
          </PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default Pokedex;
