import BearBox from "./components/BearBox"
// import CatBox2 from "./components/CatBox2"
// import { CatController } from "./components/CatController"
// import CatBox from "./components/catBox"

import { FoodBox } from "./components/FoodBox"

function App() {


  return (
    <div className='container'>
      <h1>Zustand Course</h1>
      {/* <CatBox />
      <CatBox2 />
      <CatController /> */}
      <BearBox />
      <FoodBox />
    </div>
  )
}

export default App
