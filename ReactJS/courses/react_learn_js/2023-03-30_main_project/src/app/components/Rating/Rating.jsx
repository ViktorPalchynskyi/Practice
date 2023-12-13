import Image from "next/image";
import styles from './styles.module.scss'
import classNames from "classnames";

const MAX_RATING = 5;

export const Rating = ({ 
  maxRating = MAX_RATING, 
  value, 
  className, 
  onClick 
}) => {
  return (
    <div className={styles .root}>
        {maxRating > 0 && 
            new Array(maxRating)
                .fill(null)
                .map((_, index) => (
                    <Image 
                        onClick={() => onClick?.(index + 1)}
                        src={`/images/star${index >= value ? '' : '-gold'}.png`} 
                        width={32} 
                        height={32}
                        className={classNames(styles.star, className, {
                          [styles.clickable]: !!onClick
                        })} 
                        key={index}
                        alt={index >= value ? 'black' : 'gold'}
                    />
                )) 
        }
    </div>
  );
};
