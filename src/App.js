import { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox'

function App() {
  const [foodList, setFoodList] = useState(foods);
  console.log(foodList)

  return (
    <div className="App">
    <h1>Food List</h1>
      {foodList.map( food => (<FoodBox key={Math.random()} foodProps={food}/>))}
    </div>
  );
}
export default App;
