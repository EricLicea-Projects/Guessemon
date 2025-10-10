import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import type { SystemStyleObject } from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const pokeBallFrame: SystemStyleObject = {
  position: "relative",
  bgGradient: "linear-gradient(180deg, #0E0F1A 0%, #0A0C16 100%)",

  border: "3px solid transparent",
  borderImageSlice: 1,
  borderImageSource: `conic-gradient(
    from 90deg at 50% 50%,
    transparent 2deg 0deg,
    var(--chakra-colors-gray-100) 12deg 168deg,
    transparent 179deg 180deg,
    var(--chakra-colors-red-400) 192deg 348deg,
    transparent 360deg 360deg
  )`,

  _before: {
    content: '""',
    pointerEvents: "none",
    position: "absolute",
    inset: 0,
    backgroundImage:
      "repeating-linear-gradient(180deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 2px, transparent 2px, transparent 8px)",
    opacity: 0.5,
    borderRadius: "inherit",
  },
};

const colors = {
  accent: {
    10: "rgba(0, 255, 221, 0.1)",
    50: "rgba(0, 255, 221, 0.5)",
    100: "rgba(0, 255, 221, 1)",
  },
};

const fonts = {
  heading: '"Press Start 2P", cursive',
  body: '"Press Start 2P", cursive',
  color: "custom.text",
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles: {
    global: {
      "*": {
        WebkitTapHighlightColor: "transparent",
      },
    },
  },
  semanticTokens: {
    colors: {
      highlight: {
        default: "accent.10",
        _dark: "accent.10",
      },
      borderColor: {
        default: "gray.500",
        _dark: "gray.500",
      },
      textColor: {
        default: "gray.100",
        _dark: "gray.100",
      },
      inputBoxColor: {
        default: "accent.50",
        _dark: "accent.50",
      },
      focusColor: {
        default: "accent.100",
        _dark: "accent.100",
      },
    },
  },
  layerStyles: {
    pokeBallFrame,
  },
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            _focus: { boxShadow: "none", outline: "none" },
            _focusVisible: { boxShadow: "none", outline: "none" },
          },
        },
      },
    },
  },
});

export default theme;
