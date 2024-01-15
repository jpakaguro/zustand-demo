// import { create } from "zustand";
import { createSelectors } from "../utils/createSelector";
import { devtools } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

type TCatStoreState = {
    cats: {
        bigCats: number;
        smallCats: number;
    },
    increaseBigCats: () => void;
    increaseSmallCats: () => void;
}

const store = createWithEqualityFn<TCatStoreState>()(
    devtools((set) => ({
        cats: {
            bigCats: 0,
            smallCats: 0
        },
        increaseBigCats: () => set((state) => ({cats: {...state.cats, bigCats: state.cats.bigCats + 1}})),
        increaseSmallCats: () => set((state) => ({cats: {...state.cats, smallCats: state.cats.smallCats + 1}}))
        }), 
        { enabled: true, name: "CatStore" }) // devtools options
)

export const useCatStore = createSelectors(store)
