import useGetPokeOfDay from "@/hooks/useGetPokeOfDay";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Image,
  Button,
  Text,
} from "@chakra-ui/react";

const Pokedex = () => {
  const { data } = useGetPokeOfDay();
  const pokedexImg = `/assets/pokedex.png`;

  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Button
          variant="ghost"
          p={0}
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent" }}
          sx={{ WebkitTapHighlightColor: "transparent" }}
        >
          <Image
            src={pokedexImg}
            alt="Rotom Pokedex"
            boxSize="95px"
            objectFit="contain"
            transition="transform 0.2s ease-in-out"
            _hover={{ transform: "scale(1.1)" }}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent borderColor="custom.primaryBorder" border="3px double">
        <PopoverArrow bg="custom.primaryBorder" />
        <PopoverBody bg="custom.primaryLight">
          <Text color="custom.text" fontSize="xs">
            {data ? data.flavor_text : "Loading..."}
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default Pokedex;
