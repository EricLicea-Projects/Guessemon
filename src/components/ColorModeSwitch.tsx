import { IconButton, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <IconButton
      colorScheme={isDark ? "orange" : "gray"}
      isRound={true}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      size={"md"}
      fontSize={"30px"}
      variant="outline"
      onClick={toggleColorMode}
      icon={isDark ? <FaSun /> : <FaMoon />}
    />
  );
};

export default ColorModeSwitch;
