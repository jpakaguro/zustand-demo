import { useCatStoreImmer } from "../stores/catStoreImmerMiddleware"

const CatBox = () => {
    const {cats, increaseBigCats, increaseSmallCats} = useCatStoreImmer()
    const {bigCats, smallCats} = cats as { bigCats: number, smallCats: number };
    
    return (
        <div className="box">
            <div>
                <h1>Cats</h1>
                <span>Big Cats: {bigCats}</span>  <span>Small Cats: {smallCats}</span>
                <button onClick={increaseBigCats}>Add Big Cat</button>
                <button onClick={increaseSmallCats}>Add Small Cat</button>
            </div>
        </div>
    )
}

export default CatBox