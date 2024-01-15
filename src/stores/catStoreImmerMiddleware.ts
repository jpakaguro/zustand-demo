import { createWithEqualityFn } from "zustand/traditional";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../utils/createSelector";
import { createJSONStorage, devtools, persist, subscribeWithSelector } from "zustand/middleware";

type TCatStoreState = {
    cats: {
        bigCats: number;
        smallCats: number;
        totalCats: number;
    };
    increaseBigCats: () => void;
    increaseSmallCats: () => void;
    summary: () => void;
};

const options = { name: "CatStore", storage: createJSONStorage(() => sessionStorage) }

const store = createWithEqualityFn<TCatStoreState>()(
    immer(
        subscribeWithSelector(persist(
            devtools(
                (set, get) => ({
                    cats: {
                        bigCats: 0,
                        smallCats: 0,
                        totalCats: 0,
                    },
                    increaseBigCats: () => set((state) => { state.cats.bigCats++ }),
                    increaseSmallCats: () => set((state) => { state.cats.smallCats++ }),
                    summary: () => set((state) => {
                        const total = get().cats.bigCats + get().cats.smallCats
                        state.cats.totalCats = total
                    })
                }), 
                { enabled: true } // devtools options 
            ), 
            options // persist options
        ))
    )
)

export const useCatStore = createSelectors(store)
