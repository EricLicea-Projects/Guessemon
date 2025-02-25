import { Card, CardBody, Image, Text } from "@chakra-ui/react";

const HintCard = () => {
  const imageURL = `/assets/pokemon/1.png`;
  return (
    <Card variant="elevated" size="md" direction="row">
      <Image objectFit="cover" src={imageURL} alt="The Guessed Pokemon" />
      <CardBody>
        <Text>Testing Text and stuff.</Text>
      </CardBody>
    </Card>
  );
};

export default HintCard;
