import {
  Box,
  Heading,
  Link,
  HStack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const emailIconSize = useBreakpointValue({ base: "16px", md: "20px" });
  const linkedinIconSize = useBreakpointValue({ base: "16px", md: "20px" });

  const contacts = [
    {
      href: "mailto:elicea.2000@gmail.com",
      ariaLabel: "Send email to elicea.2000@gmail.com",
      Icon: EmailIcon,
      text: "Email",
      iconSize: emailIconSize,
    },
    {
      href: "https://www.linkedin.com/in/elicea2000",
      ariaLabel: "Visit my LinkedIn profile",
      Icon: FaLinkedin,
      text: "LinkedIn",
      iconSize: linkedinIconSize,
    },
  ];

  return (
    <Box layerStyle="pokeBallFrame" w="100%" boxShadow="md" p={2}>
      <Heading
        as="h1"
        pb={2}
        size="sm"
        textAlign="center"
        borderBottom="3px dotted"
      >
        Contact
      </Heading>
      {contacts.map(({ href, ariaLabel, Icon, text, iconSize }, index) => (
        <HStack
          key={index}
          spacing={2}
          mt={3}
          alignItems="center"
          justify="left"
        >
          <Link
            href={href}
            isExternal
            _hover={{ textDecoration: "none", color: "teal.200" }}
            aria-label={ariaLabel}
          >
            <HStack spacing={3} alignItems="center">
              {Icon === EmailIcon ? (
                <Icon boxSize={iconSize} mt="1px" />
              ) : (
                <Icon size={iconSize} style={{ marginTop: "1px" }} />
              )}
              <Text
                fontSize={{ base: "xs", md: "md" }}
                mt={0.5}
                _hover={{ textDecoration: "none", color: "teal.200" }}
              >
                {text}
              </Text>
            </HStack>
          </Link>
        </HStack>
      ))}
    </Box>
  );
};

export default Contact;
