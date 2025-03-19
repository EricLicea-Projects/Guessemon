import Technologies from "@/components/Technologies";
import CallToAction from "@/components/CallToAction";
import { Box, Text, Heading, SimpleGrid } from "@chakra-ui/react";

const About = () => {
  return (
    <Box maxH="100vh" overflowY="auto" p={2}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
        <Box
          border="4px solid"
          borderColor="custom.primaryBorder"
          borderRadius="lg"
          boxShadow="md"
          bg="custom.primaryLight"
        >
          <Heading
            as="h1"
            p={2}
            width="100%"
            size="sm"
            textAlign="center"
            color="custom.text"
            borderBottom="1px solid"
          >
            About Guessamon
          </Heading>
          <Text color="custom.text" fontSize="xs" p={2}>
            I created Guessamon because I love games and wanted to sharpen my
            full-stack development skills. I wanted to make an experience that
            stands apart from the other websites—a platform that's fun to play
            and a unique, improved alternative to what's currently available.
          </Text>
        </Box>
        <Technologies />
        <CallToAction />
      </SimpleGrid>
      {/* Invisible spacer to provide extra bottom space */}
      <Box height="100px" />
    </Box>
  );
};

export default About;
