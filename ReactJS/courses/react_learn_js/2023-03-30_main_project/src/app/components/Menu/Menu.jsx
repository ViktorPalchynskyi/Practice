import { DishContainer } from "@/app/containers/Dish/Dish";
import styles from './styles.module.scss';

export const Menu = ({ menu }) => {
  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <ul className={styles.dishlist}>
        {menu.map(dishId => (
          <li key={dishId} className={styles.dish}>
            <DishContainer dishId={dishId}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
