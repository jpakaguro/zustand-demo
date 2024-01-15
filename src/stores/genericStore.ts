import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createWithEqualityFn } from "zustand/traditional";

type TState = {
    // fish: number;
    // addOneFish: () => void;
    // removeOneFish: () => void;
    // removeAllFish: () => void;
}

const devtoolsOptions = { enabled: true, name: "FoodStore" }
const persistOptions = { name: "FoodStore" }

export const useFoodStore = createWithEqualityFn<TState>()(
    immer(
        persist(
            devtools(
                (set) => ({
                    // fish: 0,
                    // addOneFish: () => set((state) => { state.fish++ }),
                    // removeOneFish: () => set((state) => { state.fish-- }),
                    // removeAllFish: () => set({ fish: 0 })
                }), devtoolsOptions), persistOptions)))