import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Sidebar from "@/components/Sidebar";
import useHintStore from "@/hooks/useHintStore";

const Layout = () => {
  const hasWon = useHintStore((s) => s.correct);

  const TEAL_GLOW =
    "radial-gradient(400px 200px at 50% 0%, rgba(0,255,255,0.10) 0%, transparent 60%)";
  const GOLD_GLOW =
    "radial-gradient(400px 200px at 50% 0%, rgba(255, 208, 0, 0.1) 0%, transparent 60%)";

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, xl: `"nav nav" "aside main"` }}
      templateColumns={{ base: "100%", xl: "200px 1fr" }}
      templateRows={{ base: "auto 1fr", xl: "auto 1fr" }}
      height="100vh"
      overflow="hidden"
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="xl">
        <GridItem area="aside">
          <Sidebar />
        </GridItem>
      </Show>
      <GridItem
        area="main"
        display="flex"
        justifyContent="center"
        alignItems="center"
        position="relative"
        bgGradient="linear-gradient(180deg, #0d0b0f 60%, #11081a 100%)"
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background: hasWon ? GOLD_GLOW : TEAL_GLOW,
        }}
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
};

export default Layout;
