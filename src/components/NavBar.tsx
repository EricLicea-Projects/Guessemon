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
        h="70px"
        color="custom.text"
        borderBottom="1px solid"
        borderColor="custom.primaryBorder"
        align="center"
        justify="center"
        position="relative"
      >
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon boxSize="25px" />}
          display={{ base: "block", lg: "none" }}
          onClick={onOpen}
          variant="ghost"
          color="custom.text"
          position="absolute"
          left="0.5rem"
        />

        <HStack spacing={0}>
          <Image src={logo} boxSize="70px" />
          <Text fontSize="md">Guessamon</Text>
          <Image src={logo} boxSize="70px" />
        </HStack>
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay bg="rgba(0, 0, 0, 0.85)" />
        <DrawerContent bg="transparent">
          <DrawerCloseButton color="custom.text" />
          <DrawerHeader color="custom.text">Menu</DrawerHeader>
          <DrawerBody p={0}>
            <Sidebar onLinkClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
