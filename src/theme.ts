import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// #dad2af, #a39474, #c07411, #5e4c3e, #252525,rgb(180, 141, 111)

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const colors = {
  custom: {
    primary: "#040f16",
    primaryLight: "#000022",
    primaryBorder: "#005E7C",
    secondary: "#001242",
    secondaryLight: "#005E7C",
    accent: "#0008ff",
    accentDark: "#5e4c3e",
    correct: "#84ff00",
    wrong: "#ff2e6d",
    text: "#0094C6",
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

const fonts = {
  heading: '"Press Start 2P", cursive',
  body: '"Press Start 2P", cursive',
  color: "custom.text",
};

const theme = extendTheme({ config, colors, fonts });

export default theme;
