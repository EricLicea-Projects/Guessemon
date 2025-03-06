import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GuessingGame from "./components/GuessingGame";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const setVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setVhProperty();
    window.addEventListener("resize", setVhProperty);

    return () => window.removeEventListener("resize", setVhProperty);
  }, []);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      templateRows={{ base: "auto 1fr", lg: "auto 1fr" }}
      bg="custom.primary"
      color="custom.secondary"
      height="calc(var(--vh, 1vh) * 100)"
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
