import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingRight={"3px"}>
      <Image src={logo} boxSize={"70px"} />
      <Text fontSize={"2xl"}>Guessamon</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
