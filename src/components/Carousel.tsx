import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = React.Children.count(children);

  // Reset current index when children count changes.
  useEffect(() => {
    setCurrentIndex(0);
  }, [totalItems]);

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems),
    onSwipedRight: () =>
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  return (
    <Box position="relative" width="100%" overflow="hidden">
      <Flex
        {...handlers}
        minHeight="300px" // Ensure a min height so cards are visible
        position="relative"
      >
        {React.Children.map(children, (child, index) => (
          <Box
            w="100%"
            position="absolute"
            top={0}
            left={0}
            transition="opacity 0.5s ease-in-out"
            opacity={index === currentIndex ? 1 : 0}
            pointerEvents={index === currentIndex ? "auto" : "none"}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {child}
          </Box>
        ))}
      </Flex>
      {/* Navigation Icon Buttons */}
      <IconButton
        aria-label="Previous"
        icon={<ArrowLeftIcon />}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={goPrev}
        variant="ghost"
        zIndex={1}
      />
      <IconButton
        aria-label="Next"
        icon={<ArrowRightIcon />}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={goNext}
        variant="ghost"
        zIndex={1}
      />
    </Box>
  );
};

export default Carousel;
