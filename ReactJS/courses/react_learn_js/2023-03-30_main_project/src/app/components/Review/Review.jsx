import { Rating } from '@/app/components/Rating/Rating.jsx'
import { useState } from 'react';

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }  

  const { rating, text, user } = review;
  const [ratingToShow, setRatingToShow] = useState(() => rating);

  const onRatingChange = (event) => {
    const selectedRating = Number(event.target.getAttribute('value'));
    
    setRatingToShow(selectedRating)
  }

  return (
    <div>
        <Rating value={ratingToShow} onClick={onRatingChange}/>
        <p>{`Message: ${text}`}</p>
        <p>{`Customer: ${user}`}</p>
    </div>
  );
};
