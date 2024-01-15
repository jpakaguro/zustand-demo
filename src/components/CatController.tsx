import { shallow } from "zustand/shallow";
import { useCatStore } from "../stores/catStoreImmerMiddleware";


export const CatController = () => {
    // const {increaseBigCats, increaseSmallCats, summary} = useCatStoreImmer();

    // const increaseBigCats = useCatStoreImmer.use.increaseBigCats();
    // const increaseSmallCats = useCatStoreImmer.use.increaseSmallCats();
    // const summary = useCatStoreImmer.use.summary();

    // const {increaseBigCats, increaseSmallCats, summary} = useCatStore(
    //     (state) => ({
    //         increaseBigCats: state.increaseBigCats,
    //         increaseSmallCats: state.increaseSmallCats,
    //         summary: state.summary
    //         }), shallow); 

    const [increaseBigCats, increaseSmallCats, summary] = useCatStore((state) => [
        state.increaseBigCats,
        state.increaseSmallCats,
        state.summary
    ], shallow);

    return (
        <div>
            <h1>Cat Controller</h1>
            {Math.random()}
            <button onClick={increaseBigCats}>Increase Big Cats</button>
            <button onClick={increaseSmallCats}>Increase Small Cats</button>
            <button onClick={summary}>Summarize Total Cats</button>
        </div>
    )
}