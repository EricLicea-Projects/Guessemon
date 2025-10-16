import { Box, Heading, Text, HStack, SimpleGrid } from "@chakra-ui/react";
import {
  SiReact,
  SiTypescript,
  SiVite,
  SiChakraui,
  SiPython,
  SiRedis,
  SiPostgresql,
} from "react-icons/si";

const techStack = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vite", icon: SiVite, color: "#646cff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "ChakraUI", icon: SiChakraui, color: "#319795" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Redis", icon: SiRedis, color: "#D82C20" },
  { name: "SQL", icon: SiPostgresql, color: "#2F4F4F" },
  { name: "FastAPI", icon: SiChakraui, color: "#319955" },
];

const Technologies = () => {
  return (
    <Box layerStyle="pokeBallFrame" width="100%" boxShadow="md">
      <Heading
        as="h1"
        p={3}
        width="100%"
        size="sm"
        textAlign="center"
        borderBottom="3px dotted"
      >
        Technologies Used
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 2 }} spacing={3} p={3}>
        {techStack.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <HStack key={tech.name} textAlign="center">
              <IconComponent size="40px" color={tech.color} />
              <Text fontSize="xs">{tech.name}</Text>
            </HStack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default Technologies;
