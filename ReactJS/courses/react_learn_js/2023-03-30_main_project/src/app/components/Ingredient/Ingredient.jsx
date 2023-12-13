import { Button } from "../Button/Button";
import styles from './styles.module.scss';
import classNames from 'classnames';
import { useAmount } from '@/app/hooks/useAmount';

export const Ingredient = ({ ingredient, className }) => {
  const { increment, decrement, amount } = useAmount(1);

  return (
    <div className={classNames(styles.root, className)}>
        <span className={styles.title}>{ingredient}</span>
        <div>
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
    </div>
  );
};
