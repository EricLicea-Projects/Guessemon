import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AttributeHint {
  is_correct: boolean;
  guess: string;
}

export interface TypesHint {
  shared: string[];
  guess: string[];
  guess_single: boolean;
  correct_single: boolean;
  both_single: boolean;
}

export interface Hints {
  id: number;
  types: TypesHint;
  color: AttributeHint;
  generation: AttributeHint;
  shape: AttributeHint;
  height: string;
  weight: string;
}

export interface PokemonResponse {
  correct: boolean;
  hints: Hints;
}

interface HintStore {
  hints: Hints[];
  correct: boolean;
  currentPokemon: number | null;
  selectedHintIndex: number | null;
  addHint: (hint: Hints) => void;
  setCorrect: (value: boolean) => void;
  setCurrentPokemon: (value: number) => void;
  setSelectedHintIndex: (index: number) => void;
  reset: () => void;
}

const useHintStore = create<HintStore>()(
  persist(
    (set) => ({
      hints: [],
      correct: false,
      currentPokemon: null,
      selectedHintIndex: null,
      addHint: (hint) =>
        set((state) => ({
          hints: [...state.hints, hint],
          selectedHintIndex: [...state.hints, hint].length - 1,
        })),
      setCorrect: (value: boolean) => set({ correct: value }),
      setCurrentPokemon: (value: number) => set({ currentPokemon: value }),
      setSelectedHintIndex: (value: number) =>
        set({ selectedHintIndex: value }),
      reset: () => set({ hints: [], correct: false, selectedHintIndex: null }),
    }),
    { name: "hints-storage" }
  )
);

export default useHintStore;
