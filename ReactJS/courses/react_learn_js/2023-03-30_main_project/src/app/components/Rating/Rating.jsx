import Image from "next/image";
import styles from './styles.module.scss'

export const Rating = ({ maxRating = 5, value }) => {
  const getRating = () => {
    const ratingArr = [];

    for (let i = 0; i < maxRating; i++) {
        if (i + 1 <= value) {
            ratingArr.push(<Image src='/images/star-gold.png' width={25} height={20} alt='rating'/>);
            continue;
        }

        ratingArr.push(<Image src='/images/star.png' width={25} height={20} alt='rating'/>)
    }

    return ratingArr;
  };  

  const rating = getRating();

  return (
    <div className={styles.root}>
        {...rating}
    </div>
  );
};
