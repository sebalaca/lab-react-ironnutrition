// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({foodProps}) {
  // console.log(foodProps)
  const {name, calories, image, servings} = foodProps
  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 320, margin: 10 }}
      >
        <img src={image} height={80} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories*servings}</b> kcal
        </p>
        <Button type="primary">Delete</Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
