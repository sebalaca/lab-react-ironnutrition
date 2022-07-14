import { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'

function App() {
  const [foodList, setFoodList] = useState(foods);
  console.log(foodList)

  return (
    <div className="App">
      <AddFoodForm setFoodList={setFoodList} foodList={foodList}/>

      <h1>Food List</h1>
        <div className="foodListContainer">
          {foodList.map( food => (<FoodBox key={Math.random()} foodProps={food}/>))}
        </div>
    </div>
  );
}
export default App;
