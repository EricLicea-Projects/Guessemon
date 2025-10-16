import ROADMAP from "@/data/roadmap";
import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Roadmap = () => {
  return (
    <UnorderedList styleType="'*'" spacing={4} px={4}>
      {ROADMAP.map((item) => (
        <ListItem key={item.key} px={3}>
          <Text mb={2} fontWeight="bold">
            {item.title}
          </Text>
          <Text>{item.description}</Text>
        </ListItem>
      ))}
    </UnorderedList>
  );
};

export default Roadmap;
