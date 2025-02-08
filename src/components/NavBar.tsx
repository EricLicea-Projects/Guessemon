import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"70px"} />
      <Text fontSize={"2xl"}>Guessamon</Text>
    </HStack>
  );
};

export default NavBar;
