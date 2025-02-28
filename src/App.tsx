import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GuessingGame from "./components/GuessingGame";

const App = () => {
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      templateRows={{ base: "auto 1fr", lg: "auto 1fr" }}
      bg="custom.primary"
      color="custom.secondary"
      height="100vh"
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
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <GuessingGame />
      </GridItem>
    </Grid>
  );
};

export default App;
