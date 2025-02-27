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
    higher_higher: `${pokemonName} is both bulkier and taller – a true giant!`,
    higher_lower: `${pokemonName} is heavier but a bit on the shorter side – compact power!`,
    higher_equal: `${pokemonName} carries extra weight while matching in height – strong and steady!`,
    lower_higher: `${pokemonName} is lighter yet stands taller – a lean climber!`,
    lower_lower: `${pokemonName} is both lighter and shorter – a small but mighty contender!`,
    lower_equal: `${pokemonName} is lighter while sharing the same height – sleek and balanced!`,
    equal_higher: `${pokemonName} weighs the same but towers above – reaching new heights!`,
    equal_lower: `${pokemonName} is equally weighted but a bit shorter – compact and clever!`,
    equal_equal: `${pokemonName} matches perfectly in both weight and height – an ideal match!`,
  };

  const messageKey = `${weight}_${height}`;
  const message = hintMessages[messageKey] || `${pokemonName} is a mystery!`;

  return (
    <Text
      p={3}
      color="custom.primary"
      fontSize="xs"
      fontFamily='"Press Start 2P", cursive'
    >
      {message}
    </Text>
  );
};

export default HintCardText;
