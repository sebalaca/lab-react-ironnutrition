// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({setFoodList, foodList}) {

  //Genero State de cada input
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)

  //maneja los datos del forms - TODOS
  const handleOnSubmit = (e) => {
    e.preventDefault()
    const newFood = {name: name, image: image, calories: calories, servings: servings}
    setFoodList([...foodList, newFood])
  }

//Maneja los datos de cada input
  const handleName = (e) => {
    e.preventDefault()
    setName(e.target.value) 
  }

  const handleImage = (e) => {
    e.preventDefault()
    setImage(e.target.value) 
  }

  const handleCalories = (e) => {
    e.preventDefault()
    if (e.target.value > 0) {
      setCalories(e.target.value) 
    } 
  }

  const handleServings = (e) => {
    e.preventDefault()
    if (e.target.value > 0) {
      setServings(e.target.value) 
    }
    
  }
  return (
    //Componente controlado con onSubmit
    <form className="formContainer" onSubmit={handleOnSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleName} />

      <label>Image</label>
      <Input value={image} type="text" onChange={handleImage} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={handleCalories} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={handleServings} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
