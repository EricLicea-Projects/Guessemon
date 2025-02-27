import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// #dad2af, #a39474, #c07411, #5e4c3e, #252525,rgb(180, 141, 111)

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const colors = {
  custom: {
    primary: "#dad2af",
    secondary: "#252525",
    secondaryLight: "#2b2b2b",
    accent: "#a978ff",
    accentDark: "#5e4c3e",
    correct: "#84ff00",
    wrong: "#ff2e6d",
  },
  hintColor: {
    black: "#121212",
    blue: "#0008a1",
    brown: "#452d14",
    gray: "#575757",
    green: "#00700d",
    pink: "#ffaddd",
    purple: "#6d0075",
    red: "#570000",
    white: "#ffffff",
    yellow: "#ffe600",
  },
};

const theme = extendTheme({ config, colors });

export default theme;
