import { Dish } from "../Dish/Dish";
import styles from './styles.module.scss';

export const Menu = ({ menu }) => {
  if (!menu?.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <ul className={styles.dishlist}>
        {menu.map(dish => (
          <li key={dish?.id} className={styles.dish}>
            <Dish dish={dish}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
