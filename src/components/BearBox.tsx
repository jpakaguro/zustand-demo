import { TBearStoreState, useBearStore } from "../stores/bearStore";

const BearBox = () => {
    // const bears = useBearStore(state => state.bears);
    // const increasePopulation = useBearStore(state => state.increasePopulation);
    // const removeAllBears = useBearStore(state => state.removeAllBears);
    const {bears, increasePopulation, removeAllBears} = useBearStore();
    return (
        <div className="box">
                <div>
                        <h1>Bears</h1>
                        <span>Bears: {bears}</span>
                        <button onClick={increasePopulation}>Add Bear</button>
                        <button onClick={removeAllBears}>Remove Bear</button>
                </div>
        </div>
    );
}

export default BearBox;
