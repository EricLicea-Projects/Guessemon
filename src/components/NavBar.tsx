import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <HStack
      bg="custom.secondary"
      spacing={5}
      justifyContent="center"
      color="custom.primary"
      paddingRight={"3px"}
    >
      <Image src={logo} boxSize={"70px"} />
      <Text fontSize={"2xl"}>Guessamon</Text>
      <Image src={logo} boxSize={"70px"} />
    </HStack>
  );
};

export default NavBar;
