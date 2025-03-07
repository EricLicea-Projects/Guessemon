import { VStack } from "@chakra-ui/react";
import useDragScroll from "@/hooks/useDragScroll";
import React from "react";

interface HintCardContainerProps {
  children: React.ReactNode;
}

const HintCardContainer = ({ children }: HintCardContainerProps) => {
  const {
    containerRef,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    stopDragging,
  } = useDragScroll();

  return (
    <VStack
      ref={containerRef}
      py={3}
      spacing={3}
      width={{ base: "100%", lg: "550px" }}
      height={{ base: "400px", lg: "500px" }}
      overflowY="scroll"
      overflowX="hidden"
      sx={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 2%, black 98%, transparent 100%)",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: isDragging ? "none" : "auto",
        WebkitUserSelect: isDragging ? "none" : "auto",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={stopDragging}
      onMouseLeave={stopDragging}
    >
      {children}
    </VStack>
  );
};

export default HintCardContainer;
