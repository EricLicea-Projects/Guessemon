import {
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
      <HStack
        bg="custom.primaryLight"
        spacing={5}
        borderBottom="1px solid"
        borderColor="custom.primaryBorder"
        justifyContent="center"
        color="custom.text"
        paddingRight="3px"
      >
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon boxSize="25px" />}
          display={{ base: "block", lg: "none" }}
          onClick={onOpen}
          variant="ghost"
          color="custom.primary"
        />
        <Image src={logo} boxSize="70px" />
        <Text fontSize="2xl">Guessamon</Text>
        <Image src={logo} boxSize="70px" />
      </HStack>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="full">
        <DrawerOverlay bg="rgba(0, 0, 0, 0.85)" />
        <DrawerContent bg="transparent">
          <DrawerCloseButton color="custom.primary" />
          <DrawerHeader color="custom.primary">Menu</DrawerHeader>
          <DrawerBody p={0}>
            <Sidebar onLinkClick={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;
