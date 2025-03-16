import useHintStore from "@/hooks/useHintStore";
import { Grid, GridItem, Image } from "@chakra-ui/react";

const PokeballHintGrid = () => {
  const hints = useHintStore((state) => state.hints);
  const setSelectedHintIndex = useHintStore(
    (state) => state.setSelectedHintIndex
  );
  const selectedHintIndex = useHintStore((state) => state.selectedHintIndex);
  const defaultImage = "/assets/pokeball.png";

  const images = Array.from({ length: 6 }, (_, index) => {
    const hint = hints[index];
    return hint ? `/assets/pokemon/${hint.id}.png` : defaultImage;
  });

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap={0}
      border="4px solid"
      borderColor="custom.primaryBorder"
    >
      {images.map((src, index) => {
        const isRightEdge = (index + 1) % 3 === 0;
        const isBottomEdge = index >= 3;
        const isSelected = index === selectedHintIndex;

        return (
          <GridItem
            key={index}
            p={3}
            cursor="pointer"
            bg={isSelected ? "custom.secondary" : "custom.primaryLight"}
            borderRight={!isRightEdge ? "3px solid" : "none"}
            borderBottom={!isBottomEdge ? "3px solid" : "none"}
            borderColor="custom.primaryBorder"
            _hover={{ bg: "custom.secondary" }}
            sx={{ WebkitTapHighlightColor: "transparent" }}
            onClick={() => setSelectedHintIndex(index)}
            role="group"
          >
            <Image
              src={src}
              boxSize="80px"
              transition="transform 0.2s ease"
              _groupHover={{ transform: "scale(1.1)" }}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default PokeballHintGrid;
