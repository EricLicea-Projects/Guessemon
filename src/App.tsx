import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PokemonGuessInput from "./components/PokemonGuessInput";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"} height="100px">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"gold"}>
          aside
        </GridItem>
      </Show>
      <GridItem
        area={"main"}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <PokemonGuessInput />
      </GridItem>
    </Grid>
  );
};

export default App;
