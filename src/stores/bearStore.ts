import {create} from 'zustand'

export type TBearStoreState = {
    bears: number;
    increasePopulation: () => void;
    removeAllBears: () => void;
}

export const useBearStore = create<TBearStoreState>()((set) => ({ // () currie function syntax  
    bears: 0,
    increasePopulation: () => set((state) => ({bears: state.bears + 1})), 
    removeAllBears: () => set({bears: 0})
}))