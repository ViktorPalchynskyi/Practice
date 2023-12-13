import { Button } from "../Button/Button";
import styles from './styles.module.scss';
import ThumbDown from './images/thumb-down.svg';
import ThumbUp from './images/thumb-up.svg';
import { useState } from "react";

// Valid for craete ReactApp
// import { ReactComponent as ThumbUp } from './images/thumb-up.svg';

export const Dish = ({ dish }) => {
  const [dishCount, setDishCount] = useState(0);

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
        <span>{name}</span>
        <Button type={'secondary'} className={styles.incrementAction} onClick={() => setDishCount(dishCount > 0 ? dishCount - 1 : dishCount )}>
          -
        </Button>
        <Button className={styles.decrementAction} onClick={() => setDishCount(dishCount < 5 ? dishCount + 1 : dishCount)}>
          +
        </Button>
        <div>
          {dishCount}
        </div>
        <ul>
            {ingredients.map(({ name, id }) => (
              <li key={id}>
                {name}
              </li>
            ))}
        </ul>
    </div>
  );
};
