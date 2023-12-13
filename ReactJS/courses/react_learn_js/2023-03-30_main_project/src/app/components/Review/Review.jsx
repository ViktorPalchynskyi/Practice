import { Rating } from '@/app/components/Rating/Rating.jsx'
import { useState } from 'react';

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }  

  const { rating, text, user } = review; 

  return (
    <div>
        <Rating value={rating}/>
        <p>{`Message: ${text}`}</p>
        <p>{`Customer: ${user}`}</p>
    </div>
  );
};
