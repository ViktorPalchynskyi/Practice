import { Rating } from '@/app/components/Rating/Rating.jsx'
import { UserContainer } from '@/app/containers/User/User';

export const Review = ({ review, className }) => {
  if (!review) {
    return null;
  }  

  const { rating, text, userId } = review; 

  return (
    <div className={className}>
        <Rating value={rating}/>
        <p>{`Message: ${text}`}</p>
        <UserContainer userId={userId}/>
    </div>
  );
};
