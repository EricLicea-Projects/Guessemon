import { VStack, HStack, Text, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import homeIcon from "../assets/home.svg";
import aboutIcon from "../assets/about.svg";

const Sidebar = () => {
  const links = [
    { name: "Home", to: "/", icon: homeIcon },
    { name: "About", to: "/about", icon: aboutIcon },
  ];

  return (
    <VStack width="100%" align="stretch" spacing={0} p={0} borderRadius="md">
      {links.map((link) => (
        <HStack
          as={RouterLink}
          key={link.to}
          to={link.to}
          w="100%"
          py={3}
          px={2}
          borderBottom="1px solid"
          borderColor="custom.primary"
          fontWeight="bold"
          fontSize="lg"
          fontFamily='"Press Start 2P", cursive'
          _hover={{
            bg: "custom.secondaryLight",
            textDecoration: "none",
          }}
          justify="flex-start"
          align="center"
          spacing={1}
          role="group"
        >
          <HStack
            transition="transform 0.2s"
            _groupHover={{ transform: "scale(1.1)" }}
          >
            {link.icon && (
              <Image src={link.icon} alt={`${link.name} Icon`} boxSize="50px" />
            )}
            <Text mx={3}>{link.name}</Text>
          </HStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default Sidebar;
