import Technologies from "@/components/aboutPage/Technologies";
import Contact from "@/components/aboutPage/Contact";
import { Box, Heading, Stack, VStack } from "@chakra-ui/react";
import Roadmap from "@/components/Roadmap";

const About = () => {
  return (
    <Stack direction={{ base: "column", xl: "row" }} spacing={5} p={5} w="100%">
      <Box
        layerStyle="pokeBallFrame"
        boxShadow="md"
        w={{ base: "100%", xl: "75%" }}
      >
        <Heading
          p={2}
          mb={3}
          borderBottom="3px dotted "
          size="lg"
          width="100%"
          color="red.300"
        >
          Roadmap
        </Heading>
        <Roadmap />
      </Box>
      <VStack w={{ base: "100%", xl: "25%" }} pb={5}>
        <Technologies />
        <Contact />
      </VStack>
    </Stack>
  );
};

export default About;
