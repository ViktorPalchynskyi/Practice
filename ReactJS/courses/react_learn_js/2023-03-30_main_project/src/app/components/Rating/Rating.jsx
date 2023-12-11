import Image from "next/image";
import styles from './styles.module.scss'

const MAX_RATING = 5;

export const Rating = ({ maxRating = MAX_RATING, value, className }) => {
  return (
    <div className={styles .root}>
        {maxRating > 0 && 
            new Array(maxRating)
                .fill(null)
                .map((_, index) => (
                    <Image 
                        src={`/images/star${index >= value ? '' : '-gold'}.png`} 
                        width={32} 
                        height={32}
                        className={styles.star} 
                        key={index}
                        alt={index >= value ? 'black' : 'gold'}
                    />
                )) 
        }
    </div>
  );
};
