import { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => { 
  if (!reviews) {
    return null;
  }  

  return (
    <div key={reviews.id}>
        <h3>Review</h3>
        {reviews.map(review => <Review review={review}/>)}
    </div>
  );
};