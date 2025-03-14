import { useState, useRef } from "react";

const useDragScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

  // For both mouse and touch events:
  const startDrag = (y: number) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartY(y);
      setScrollStart(containerRef.current.scrollTop);
    }
  };

  const doDrag = (y: number) => {
    if (!isDragging || !containerRef.current) return;
    const deltaY = y - startY;
    containerRef.current.scrollTop = scrollStart - deltaY;
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    startDrag(e.pageY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      doDrag(e.pageY);
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    startDrag(e.touches[0].pageY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      doDrag(e.touches[0].pageY);
    }
  };

  const handleTouchEnd = () => {
    stopDrag();
  };

  return {
    containerRef,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    stopDragging: stopDrag,
  };
};

export default useDragScroll;
