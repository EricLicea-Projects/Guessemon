import useHintStore from "@/hooks/useHintStore";

export const useSelectedHint = () => {
  const selectedIndex = useHintStore((state) => state.selectedHintIndex);
  const hint = useHintStore((state) =>
    selectedIndex !== null ? state.hints[selectedIndex] : null
  );
  return hint;
};
