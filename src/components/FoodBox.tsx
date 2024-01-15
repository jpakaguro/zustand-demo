import { addOneFish, removeOneFish, removeAllFish, useFoodStore } from "../stores/foodStore";

export const FoodBox = () => {
  
    const fish = useFoodStore(state => state.fish) // reactively subscribe to the store
    // const fish = useFoodStore.getState().fish // non-reactive, just get the value

    const add5Fish = () => {
        useFoodStore.setState((state) => ({
            fish: state.fish + 5
        }))
    }

    return (
        <div className="box">
            <h1>Food</h1>
            <div>{Math.random()}</div>
            <span>Fish: {fish}</span>
            <button onClick={addOneFish}>Add Fish</button>
            <button onClick={removeOneFish}>Remove Fish</button>
            <button onClick={removeAllFish}>Remove All Fish</button>
            <button onClick={add5Fish}>Add 5 Fish</button>
        </div>
    )
}