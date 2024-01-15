import { useCatStore } from "../stores/catStoreImmerMiddleware"

const CatBox = () => {
  const { cats: {bigCats, smallCats, totalCats}, increaseBigCats, increaseSmallCats, summary } = useCatStore()

    return (
        <div className="box">
            
                <h1>Cats</h1>
                <span>Big Cats: {bigCats}</span> <span>Small Cats: {smallCats}</span>
                <span>Total Cats: {totalCats}</span>
                <span>{Math.random()}</span>
                <button onClick={increaseBigCats}>Add Big Cat</button>
                <button onClick={increaseSmallCats}>Add Small Cat</button>
                <button onClick={summary}>Summary</button>
                <div></div>

        </div>
    )
}

export default CatBox