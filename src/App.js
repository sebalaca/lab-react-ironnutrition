import { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import foods from './foods.json'

function App() {
  const [foodList, setFoodList] = useState(foods);
  console.log(foodList)

  return (
    <div className="App">
    <h1>Food List</h1>
      {foodList.map( food => (
        <div>
          <p>{food.name}</p>
          <img src={food.image} width={150} />
        </div>
      ))}
    </div>
  );
}
export default App;
