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
  },
  buttonPrimary: {
    500: "#dad2af",
    600: "#dbd2a7",
    700: "#d6cb9a",
  },
};

const theme = extendTheme({ config, colors });

export default theme;
