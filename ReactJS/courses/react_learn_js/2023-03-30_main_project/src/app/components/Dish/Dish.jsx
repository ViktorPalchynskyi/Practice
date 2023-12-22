import { Button } from '../Button/Button';
import styles from './styles.module.scss';
import { Ingredients } from "../Ingredients/Ingredients";
import { useDispatch, useSelector } from '@/app/CustomStore';

// Valid for craete ReactApp
// import { ReactComponent as ThumbUp } from './images/thumb-up.svg';

export const Dish = ({ dish }) => {
  const amount = useSelector((state) => state[dish.name] || 0);
  const dispatch = useDispatch();
  const increment = () => dispatch({ type: 'increment', payload: dish.name });
  const decrement = () => dispatch({ type: 'decrement', payload: dish.name });

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
        <div className={styles.mainInfo}>
          <span className={styles.title}>{name}</span>
          <Button 
            type={'secondary'} 
            className={styles.decrementAction} 
            onClick={decrement}
            disabled={amount === 0}
          >
            -
          </Button>
          {amount}
          <Button 
            className={styles.incrementAction} 
            onClick={increment}
            disabled={amount === 5}
          >
            +
          </Button>
        </div>
        {amount > 0 && <Ingredients ingredients={ingredients} className={styles.ingredients}/>}
    </div>
  );
};
