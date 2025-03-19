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

const CallToAction = () => {
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
    <Box
      border="4px solid"
      borderColor="custom.primaryBorder"
      borderRadius="lg"
      boxShadow="md"
      bg="custom.primaryLight"
      p={2}
    >
      <Heading
        as="h1"
        size="sm"
        textAlign="center"
        color="custom.text"
        borderBottom="1px solid"
        borderColor="custom.primaryBorder"
        mb={4}
      >
        Contact
      </Heading>
      {contacts.map(({ href, ariaLabel, Icon, text, iconSize }, index) => (
        <HStack
          key={index}
          spacing={2}
          mt={index > 0 ? 2 : 0}
          alignItems="center"
          justify="left"
        >
          <Link
            href={href}
            isExternal
            _hover={{ textDecoration: "none", color: "teal.200" }}
            aria-label={ariaLabel}
          >
            <HStack
              spacing={1}
              alignItems="center"
              color="custom.secondaryLight"
            >
              {Icon === EmailIcon ? (
                <Icon boxSize={iconSize} mt="1px" />
              ) : (
                <Icon size={iconSize} style={{ marginTop: "1px" }} />
              )}
              <Text
                fontSize={{ base: "xs", md: "md" }}
                color="custom.text"
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

export default CallToAction;
