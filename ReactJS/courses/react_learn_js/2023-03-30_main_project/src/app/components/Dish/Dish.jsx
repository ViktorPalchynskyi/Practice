import { Button } from "../Button/Button";
import styles from './styles.module.scss';
import ThumbDown from './images/thumb-down.svg';
import ThumbUp from './images/thumb-up.svg';
import { useState } from "react";

// Valid for craete ReactApp
// import { ReactComponent as ThumbUp } from './images/thumb-up.svg';

export const Dish = ({ dish }) => {
  const [dishCount, setDishCount] = useState(0);
  
  const increment = () => setDishCount(dishCount + 1);
  const decrement = () => setDishCount(dishCount - 1);

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
        <div>
          <span>{name}</span>
          <Button 
            type={'secondary'} 
            className={styles.incrementAction} 
            onClick={decrement}
            disabled={dishCount === 0}
          >
            -
          </Button>
          {dishCount}
          <Button 
            className={styles.decrementAction} 
            onClick={increment}
            disabled={dishCount === 5}
          >
            +
          </Button>
          
          <ul>
              {ingredients.map(({ name, id }) => (
                <li key={id}>
                  {name}
                </li>
              ))}
          </ul>
        </div>
        
    </div>
  );
};
