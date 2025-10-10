import { VStack, HStack, Text, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import homeIcon from "../assets/home.svg";
import aboutIcon from "../assets/about.svg";
import resetIcon from "../assets/reset.svg";
import useHintStore from "@/hooks/useHintStore";

type Props = {
  onLinkClick?: () => void;
};

const Sidebar = ({ onLinkClick }: Props) => {
  const resetGame = useHintStore((state) => state.reset);

  const links = [
    { name: "Home", to: "/", icon: homeIcon },
    { name: "About", to: "/about", icon: aboutIcon },
    { name: "Reset", to: "/", icon: resetIcon },
  ];

  const onResetClick = () => {
    resetGame();
    onLinkClick?.();
  };

  return (
    <VStack
      layerStyle="pokeBallFrame"
      border="none"
      boxSize="100%"
      align="stretch"
      spacing={0}
      borderRight="1px solid"
      borderColor="borderColor"
    >
      {links.map((link) => (
        <HStack
          as={RouterLink}
          key={link.name}
          to={link.to}
          w="100%"
          py={3}
          px={2}
          borderBottom="1px solid"
          borderColor="borderColor"
          _hover={{ bg: "highlight" }}
          justify="flex-start"
          align="center"
          role="group"
          onClick={link.name === "Reset" ? onResetClick : onLinkClick}
        >
          <HStack
            transition="transform 0.2s"
            _groupHover={{ transform: "scale(1.1)" }}
          >
            {link.icon && (
              <Image src={link.icon} alt={`${link.name} Icon`} boxSize="50px" />
            )}
            <Text mx={3} fontSize="lg">
              {link.name}
            </Text>
          </HStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default Sidebar;
