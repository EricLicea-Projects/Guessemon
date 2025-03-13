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
        bg="custom.primaryLight"
        h="75px"
        px={2}
        color="custom.text"
        borderBottom="1px solid"
        borderColor="custom.primaryBorder"
        align="center"
        justify={{ base: "center", lg: "flex-start" }}
      >
        <IconButton
          display={{ base: "block", lg: "none" }}
          aria-label="Open menu"
          variant="ghost"
          icon={<HamburgerIcon boxSize="25px" />}
          color="custom.text"
          position="absolute"
          left="0.5rem"
          onClick={onOpen}
        />

        <HStack spacing={0}>
          <Image
            display={{ base: "none", lg: "block" }}
            src={logo}
            boxSize="60px"
          />
          <Text fontSize="lg" mx={2}>
            Guessamon
          </Text>
        </HStack>
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay bg="rgba(0, 0, 0, 0.85)" />
        <DrawerContent bg="transparent">
          <DrawerCloseButton
            color="custom.text"
            size="lg"
            top="0.7rem"
            right="0.4rem"
          />
          <DrawerHeader color="custom.text" borderBottom="1px solid">
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
