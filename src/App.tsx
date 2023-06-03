import React, {useState} from 'react';
import Burger from "./components/Burger/Burger";
import Meat from "./img/Meat.png";
import Cheese from "./img/Cheese.png";
import Salad from "./img/Salad.png";
import Bacon from "./img/Bacon.png";
import {character} from "./Types";
import IngredientComponent from "./components/IngredientComponent/IngredientComponent";
import Button from "./components/Button/Button";
import './App.css';


const INGREDIENTS: character[] = [
  {name: 'Meat', price: 80, image: Meat},
  {name: 'Cheese', price: 50, image: Cheese},
  {name: 'Salad', price: 10, image: Salad},
  {name: 'Bacon', price: 60, image: Bacon},
];

function App() {
  const [ingredients, setIngredients] = useState([
    {name: 'Meat', count: 0},
    {name: 'Cheese', count: 0},
    {name: 'Salad', count: 0},
    {name: 'Bacon', count: 0},
  ]);

  const price = ingredients.reduce((acc, val) => {
    if (val.count > 0) {
      const ingredient = INGREDIENTS.find(ing => ing.name === val.name);
      if(ingredient) {
        acc = acc + (ingredient.price * val.count );
      }
      return acc;
    }
    return acc;
  }, 30)

  const changeQuantity = (name: string) => {
    const ingredientCoppy = ingredients.map(quantity => {
      if (name === quantity.name) {
        return {
          ...quantity,
          count: quantity.count + 1,
        }
      }
      return quantity;
    });
    setIngredients(ingredientCoppy);
  };

  const clickDelete = (name: string) => {
    const ingredientCoppy = ingredients.map(quantity => {
      if (name === quantity.name && quantity.count >= 1) {
        return {
          ...quantity,
          count: quantity.count - 1,
        }
      }
      return quantity;
    });
    setIngredients(ingredientCoppy);
  };


  // const filling:React.ReactNode[] = [];
  // // const addStuffing = () => {
  //     ingredients.map(element => {
  //         for (let i = 1; i < element.count; i++) {
  //             filling.push(<div className={element.name}></div>)
  //         }
  //         return element;
  //     })
  // }
  // addStuffing();


  return (
    <div className="App">
      <div className='container'>
        <div className='ingredient'>

          <div>
            {INGREDIENTS.map((item) => (
              <Button key={item.name} image={item.image} click={() => changeQuantity(item.name)}/>
            ))}
          </div>

          <div>
            {ingredients.map((item) => (
              <IngredientComponent
                name={item.name}
                count={item.count}
                clickDelete={() => clickDelete(item.name)}
                key={item.name}
              />
            ))}
          </div>

        </div>
        <div className='show-Burger'>
          <Burger filling={ingredients}/>
          <div>Price: {price}</div>
        </div>
      </div>

    </div>
  );
}

export default App;
