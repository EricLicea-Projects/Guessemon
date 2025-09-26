import { useReducedMotion } from "framer-motion";

export const useHintTransition = () => {
  const prefersReduced = useReducedMotion();
  return prefersReduced
    ? { duration: 0 }
    : { duration: 0.24, ease: "easeOut" as const };
};
