import { Text } from "@chakra-ui/react";
import { pokemonList } from "@/data/pokemonData";

interface HintCardTextProps {
  id: number;
  weight: string;
  height: string;
}

const HintCardText = ({ id, weight, height }: HintCardTextProps) => {
  const pokemon = pokemonList.find((p) => p.id === id);
  const pokemonName = pokemon ? pokemon.name : "Unknown";

  const hintMessages: { [key: string]: string } = {
    higher_higher: `${pokemonName} is both bulkier and taller.`,
    higher_lower: `${pokemonName} is heavier but a bit on the shorter side.`,
    higher_equal: `${pokemonName} carries extra weight while matching in height.`,
    lower_higher: `${pokemonName} is lighter yet stands taller.`,
    lower_lower: `${pokemonName} is both lighter and shorter.`,
    lower_equal: `${pokemonName} is lighter while sharing the same height.`,
    equal_higher: `${pokemonName} weighs the same but towers above.`,
    equal_lower: `${pokemonName} is equally weighted but a bit shorter.`,
    equal_equal: `${pokemonName} matches perfectly in both weight and height.`,
  };

  const messageKey = `${weight}_${height}`;
  const message = hintMessages[messageKey] || `${pokemonName} is a mystery!`;

  return (
    <Text ml="1rem" color="custom.text" fontSize="xs">
      {message}
    </Text>
  );
};

export default HintCardText;
