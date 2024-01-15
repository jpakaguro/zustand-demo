import { useState, useEffect } from "react";
import { useBearStore } from "../stores/bearStore";
import { useFoodStore } from "../stores/foodStore";
import { shallow } from "zustand/shallow";

const BearBox = () => {
    // const bears = useBearStore(state => state.bears);
    // const increasePopulation = useBearStore(state => state.increasePopulation);
    // const removeAllBears = useBearStore(state => state.removeAllBears);
    const {bears, increasePopulation, removeAllBears, reset} = useBearStore();

    // const fish = useFoodStore(state => state.fish);

    type TState = 'lightpink' | 'lightgreen' | undefined

    const [bgColor, setBgColor] = useState<TState>(
        useFoodStore.getState().fish <= 5 ? 'lightpink' : 'lightgreen' // initial value based on the store
    );

    useEffect(() => {
        // const store = useFoodStore.subscribe((state, prevState) => {
        //     if (prevState.fish <= 5 && state.fish > 5) {
        //         setBgColor('lightgreen')
        //     } else {
        //         if(prevState.fish > 5 && state.fish <= 5) setBgColor('lightpink')
        //     }
        // })

        const store = useFoodStore.subscribe(
            (state) => state.fish,  // selector function to get the value from the store 
            (fish, prevFish) => { // listener function, called when the value changes              
                if (prevFish <= 5 && fish > 5) {
                    setBgColor('lightgreen')
                } else if (prevFish > 5 && fish <= 5) {
                    setBgColor('lightpink')
                }
            },
            {
                equalityFn: shallow, // use shallow equality to prevent resubscribing too often
                fireImmediately: true // call the listener immediately with the current value
            }
        )
        return store // unsubscribe on unmount to prevent memory leaks
    }, [])

    return (
        <div className="box" style={{backgroundColor: bgColor}}>
                <div>
                        <h1>Bears</h1>
                        <div>{Math.random()}</div>
                        <span>Bears: {bears}</span>
                        <button onClick={increasePopulation}>Add Bear</button>
                        <button onClick={removeAllBears}>Remove Bear</button>
                        <button onClick={useBearStore.persist.clearStorage}>Clear Local Storage</button>
                        <button onClick={reset}>Reset</button>
                </div>
        </div>
    );
}

export default BearBox;
