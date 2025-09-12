import { useEffect, useId, useRef, useState } from "react";

export function useAutocompleteKeyboard<T>(
  items: readonly T[],
  onSelect: (item: T) => void
) {
  const [activeIndex, setActiveIndex] = useState(items.length ? 0 : -1);
  const baseId = useId();
  const listId = `${baseId}-listbox`;
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setActiveIndex(items.length ? 0 : -1);
    itemRefs.current = [];
  }, [items]);

  useEffect(() => {
    if (activeIndex < 0) return;
    const el = itemRefs.current[activeIndex];
    if (el) el.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const onKeyDown: React.KeyboardEventHandler = (e) => {
    if (!items.length) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((i) => (i + 1) % items.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((i) => (i - 1 + items.length) % items.length);
        break;
      case "Home":
        e.preventDefault();
        setActiveIndex(0);
        break;
      case "End":
        e.preventDefault();
        setActiveIndex(items.length - 1);
        break;
      case "Enter":
        if (activeIndex >= 0) {
          e.preventDefault();
          onSelect(items[activeIndex]);
        }
        break;
      case "Escape":
        setActiveIndex(-1);
        break;
      default:
        break;
    }
  };

  const setItemRef = (index: number) => (el: HTMLElement | null) => {
    itemRefs.current[index] = el;
  };

  const getItemProps = (index: number) => ({
    id: `${baseId}-option-${index}`,
    role: "option" as const,
    "aria-selected": activeIndex === index,
    getRef: setItemRef(index),
    onMouseEnter: () => setActiveIndex(index),
    onMouseDown: (e: React.MouseEvent) => {
      e.preventDefault();
      onSelect(items[index]);
    },
  });

  const listProps = {
    role: "listbox" as const,
    id: listId,
  };

  const inputAriaProps = {
    role: "combobox" as const,
    "aria-expanded": items.length > 0,
    "aria-controls": listId,
    "aria-activedescendant":
      activeIndex >= 0 ? `${baseId}-option-${activeIndex}` : undefined,
    onKeyDown,
    "aria-autocomplete": "list" as const,
  };

  return {
    activeIndex,
    setActiveIndex,
    getItemProps,
    listProps,
    inputAriaProps,
  };
}
