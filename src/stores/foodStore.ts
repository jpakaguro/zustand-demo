import { createJSONStorage, devtools, persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { createWithEqualityFn } from "zustand/traditional";


const devtoolsOptions = { enabled: true, name: "FoodStore" }
const persistOptions = { name: "FoodStore", storage: createJSONStorage(() => localStorage) }

const initialFoodValue = {
    fish: 0
}

const useFoodStore = createWithEqualityFn<typeof initialFoodValue>()(
    immer(devtools(
        subscribeWithSelector( // subscribeWithSelector is a middleware that allows you to subscribe to a selected store (example fish) and only get notified when the selected state (e.g. fish) changes
            persist(() => initialFoodValue, 
                persistOptions)
        ), devtoolsOptions))
)

const addOneFish = () => useFoodStore.setState((state) => { state.fish++ })  // immer middleware allows you to mutate the state directly
const removeOneFish = () => useFoodStore.setState((state) => ({fish:  state.fish - 1})) // not m 
const removeAllFish = () => useFoodStore.setState({ fish: 0 })

export { addOneFish, removeOneFish, removeAllFish, useFoodStore}