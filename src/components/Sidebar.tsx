import { VStack, HStack, Text, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import homeIcon from "../assets/home.svg";
import aboutIcon from "../assets/about.svg";
import resetIcon from "../assets/reset.svg";
import useHintStore from "@/hooks/useHintStore";

interface SidebarProps {
  onLinkClick?: () => void;
}

const Sidebar = ({ onLinkClick }: SidebarProps) => {
  const resetGame = useHintStore((state) => state.reset);

  const links = [
    { name: "Home", to: "/", icon: homeIcon },
    { name: "About", to: "/about", icon: aboutIcon },
  ];

  return (
    <VStack
      boxSize="100%"
      align="stretch"
      spacing={0}
      borderRight="1px solid"
      borderColor="custom.primaryBorder"
    >
      {links.map((link) => (
        <HStack
          as={RouterLink}
          key={link.to}
          to={link.to}
          sx={{ WebkitTapHighlightColor: "transparent" }}
          w="100%"
          py={3}
          px={2}
          borderBottom="1px solid"
          borderColor="custom.primaryBorder"
          _hover={{
            bg: "custom.secondary",
            textDecoration: "none",
          }}
          justify="flex-start"
          align="center"
          role="group"
          onClick={onLinkClick}
        >
          <HStack
            transition="transform 0.2s"
            _groupHover={{ transform: "scale(1.1)" }}
          >
            {link.icon && (
              <Image src={link.icon} alt={`${link.name} Icon`} boxSize="50px" />
            )}
            <Text mx={3} fontSize="lg" color="custom.text">
              {link.name}
            </Text>
          </HStack>
        </HStack>
      ))}
      {/* This is temporary reset button.*/}
      <HStack
        onClick={resetGame}
        cursor="pointer"
        sx={{ WebkitTapHighlightColor: "transparent" }}
        w="100%"
        py={3}
        px={2}
        borderBottom="1px solid"
        borderColor="custom.primaryBorder"
        fontWeight="bold"
        fontSize="lg"
        fontFamily='"Press Start 2P", cursive'
        _hover={{
          bg: "custom.secondary",
          textDecoration: "none",
        }}
        justify="flex-start"
        align="center"
        spacing={1}
        role="group"
      >
        <HStack
          color="custom.text"
          transition="transform 0.2s"
          _groupHover={{ transform: "scale(1.1)" }}
        >
          <Image src={resetIcon} boxSize="50px" />
          <Text mx={3}>Reset</Text>
        </HStack>
      </HStack>
    </VStack>
  );
};

export default Sidebar;
