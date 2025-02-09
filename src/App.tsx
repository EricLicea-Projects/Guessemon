import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PokemonGuessInput from "./components/PokemonGuessInput";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"gold"}>
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PokemonGuessInput />
      </GridItem>
    </Grid>
  );
};

export default App;
