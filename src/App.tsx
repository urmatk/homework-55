import React, {useState} from 'react';
import './App.css';
import Burger from "./components/Burger/Burger";
import Meat from "./img/Meat.png";
import Cheese from "./img/Cheese.png";
import Salad from "./img/Salad.png";
import Bacon from "./img/Bacon.png";
import {character} from "./Types";

import IngredientComponent from "./components/IngredientComponent/IngredientComponent";
import Button from "./components/Button/Button";


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

    const changeQuantity = (name: string) => {
        const ingredientCoppy = ingredients.map(quantity => {
            if (name === quantity.name) {
                return {
                    ...quantity,
                    count: quantity.count + 1,
                }
            }
            return quantity;
        })
        setIngredients(ingredientCoppy);
    };

    const clickDelete = (name: string) => {
        const ingredientCoppy = ingredients.map(quantity => {
            if (name === quantity.name && quantity.count >= 1 ) {
                return {
                    ...quantity,
                    count: quantity.count - 1,
                }
            }
            return quantity;
        })
        setIngredients(ingredientCoppy);
    };


  return (
    <div className="App">
      <div className='container'>
          <div className='ingredient'>

              <div >
                  {INGREDIENTS.map((item) => (
                     <Button image={item.image} click={() => changeQuantity(item.name)}/>
                  ))}
              </div>

              <div>
                  {ingredients.map((item) => (
                      <IngredientComponent
                          name={item.name}
                          count={item.count}
                          clickDelete={() => clickDelete(item.name)}
                      />
                  ))}
              </div>

          </div>
      <div className='show-Burger'>
          <Burger/>
      </div>
      </div>

    </div>
  );
}

export default App;
