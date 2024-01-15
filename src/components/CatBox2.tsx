import { useCatStore } from "../stores/catStoreImmerMiddleware"

const CatBox2 = () => {

    const bigCats = useCatStore(state => state.cats.bigCats)

  return (
    <div className="box">
    <h1>Partial Render</h1>
    <div>Big Cats: {bigCats}</div>
    <div>{Math.random()}</div>
    </div>
  )
}

export default CatBox2