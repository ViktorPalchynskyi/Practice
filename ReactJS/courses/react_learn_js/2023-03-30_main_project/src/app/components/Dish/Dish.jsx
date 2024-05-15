import { Button } from '../Button/Button';
import styles from './styles.module.scss';
import { Ingredients } from '../Ingredients/Ingredients';

// Valid for craete ReactApp
// import { ReactComponent as ThumbUp } from './images/thumb-up.svg';

export const Dish = ({ dish, amount, increment, decrement }) => {
    if (!dish) {
        return null;
    }

    const { name, ingredients } = dish;

    return (
        <div>
            <div className={styles.mainInfo}>
                <span className={styles.title}>{name}</span>
                <Button type={'secondary'} className={styles.decrementAction} onClick={decrement} disabled={amount === 0}>
                    -
                </Button>
                {amount}
                <Button className={styles.incrementAction} onClick={increment} disabled={amount === 5}>
                    +
                </Button>
            </div>
            {/* {amount > 0 && <Ingredients ingredients={ingredients} className={styles.ingredients}/>} */}
        </div>
    );
};
