import {
  Flex,
  HStack,
  Image,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.svg";
import Sidebar from "./Sidebar";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        layerStyle="pokeBallFrame"
        h="75px"
        px={2}
        border="none"
        borderBottom="1px solid"
        borderColor="borderColor"
        align="center"
        justify={{ base: "center", xl: "flex-start" }}
      >
        <IconButton
          display={{ base: "block", xl: "none" }}
          aria-label="Open menu"
          variant="ghost"
          icon={<HamburgerIcon boxSize="25px" />}
          position="absolute"
          left="0.5rem"
          onClick={onOpen}
        />
        <HStack spacing={0}>
          <Image
            display={{ base: "none", xl: "block" }}
            src={logo}
            boxSize="60px"
          />
          <Text fontSize="lg" mx={2}>
            Guessamon
          </Text>
        </HStack>
      </Flex>

      <Drawer
        placement="left"
        onClose={onClose}
        isOpen={isOpen}
        size={{ base: "full", lg: "xs" }}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" top="0.7rem" right="0.4rem" />
          <DrawerHeader
            bg="blackAlpha.700"
            border="none"
            borderBottom="1px solid"
            borderRight="1px solid"
          >
            Menu
          </DrawerHeader>
          <DrawerBody p={0}>
            <Sidebar onLinkClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
