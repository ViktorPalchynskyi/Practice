import { Review } from "../Review/Review";

export const Reviews = ({ reviews }) => { 
  if (!reviews) {
    return null;
  }  

  return (
    <div>
        <h3>Review</h3>
        <ul>
            {reviews.map(review => (
              <li key={review?.id}>
                <Review review={review}/>
              </li>
            ))}
        </ul>
    </div>
  );
};