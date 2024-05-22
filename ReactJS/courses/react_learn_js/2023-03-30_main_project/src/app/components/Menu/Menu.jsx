import { DishContainer, DishContainerWithMemo } from '@/app/containers/Dish/Dish';
import styles from './styles.module.scss';
import { useState } from 'react';

export const Menu = ({ menu }) => {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.root}>
            <h3>Menu</h3>
            <button onClick={() => setCount((curCount) => curCount + 1)}>Current {count}</button>
            <ul className={styles.dishlist}>
                {menu.map((dishId) => (
                    <li key={dishId} className={styles.dish}>
                        <DishContainerWithMemo dishId={dishId} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
