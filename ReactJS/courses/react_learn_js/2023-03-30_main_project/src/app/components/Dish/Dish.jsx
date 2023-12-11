import { Button } from "../Button/Button";
import styles from './styles.module.scss';
import ThumbDown from './images/thumb-down.svg';
import ThumbUp from './images/thumb-up.svg';

// Valid for craete ReactApp
// import { ReactComponent as ThumbUp } from './images/thumb-up.svg';

export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
        <span>{name}</span>
        <Button type={'secondary'} className={styles.incrementAction}>
          -
        </Button>
        <Button className={styles.decrementAction}>
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
  );
};
