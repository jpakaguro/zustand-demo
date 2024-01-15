import { create } from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type TBearStoreState = {
    bears: number;
    color: string;
    size: string
    increasePopulation: () => void;
    removeAllBears: () => void;
    reset: () => void;
}

const options = {
    name: "BearStore",
    storage: createJSONStorage(() => sessionStorage),
    partialize: (state: TBearStoreState) => 
        Object.fromEntries(Object.entries(state).filter(([key]) => 
            !["color", "size"].includes(key))) // exclude color and size from persist
    // partialize: (state: any) => ({ bears: state.bears }) // only persist bears
}


export const useBearStore = create<TBearStoreState>()(
    immer((
        persist(
            devtools(
                (set) => ({ // () currie function syntax  
                    bears: 0,
                    color: "red",
                    size: "medium",
                    increasePopulation: () => set((state) => { state.bears++ }),
                    removeAllBears: () => set({ bears: 0 }),
                    reset: () => set({ bears: 0, color: "red", size: "medium" })
                }), { enabled: true }), // devtools options
        options) // persist options
    ))
)