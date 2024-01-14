import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type TCatStoreState = {
    cats: {
        bigCats: number;
        smallCats: number;
    },
    increaseBigCats: () => void;
    increaseSmallCats: () => void;
}



export const useCatStoreImmer = create<TCatStoreState>()(immer((set) => ({
    cats: {
        bigCats: 0,
        smallCats: 0
    },
    increaseBigCats: () => set((state) => state.cats.bigCats++),
    increaseSmallCats: () => set((state) => state.cats.smallCats++)
})))