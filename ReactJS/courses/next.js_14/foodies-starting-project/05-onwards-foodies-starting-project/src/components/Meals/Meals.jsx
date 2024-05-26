import { MealItem } from '@components/MealItem/MealItem';
import styles from './styles.module.css';

export const Meals = ({ meals }) => {
    return (
        <ul className={styles.meals}>
            {meals.map((meal) => (<li key={meal.id}>
              <MealItem {...meal}/>
            </li>))}
        </ul>  
    );
};
