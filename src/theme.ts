import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// #dad2af, #a39474, #c07411, #5e4c3e, #252525

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const colors = {
  custom: {
    primary: "#dad2af",
    secondary: "#252525",
  },
};

const theme = extendTheme({ config, colors });

export default theme;
