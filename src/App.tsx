import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import PokemonGuessInput from "./components/GuessingGame";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      bg="custom.primary"
      color="custom.secondary"
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="custom.secondary" color="custom.primary">
          To Do Navigation
        </GridItem>
      </Show>
      <GridItem
        area={"main"}
        height="100vh"
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
