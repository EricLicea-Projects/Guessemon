import { useState, useRef } from "react";

const useDragScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartY(e.pageY);
      setScrollStart(containerRef.current.scrollTop);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const deltaY = e.pageY - startY;
    containerRef.current.scrollTop = scrollStart - deltaY;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  // Optional: cleanup or touch event support can be added here

  return {
    containerRef,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    stopDragging,
  };
};

export default useDragScroll;
