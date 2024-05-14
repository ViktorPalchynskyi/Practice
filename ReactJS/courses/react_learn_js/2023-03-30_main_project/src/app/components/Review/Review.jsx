import { Rating } from '@/app/components/Rating/Rating.jsx'
import { UserContainer } from '@/app/containers/User/User';

export const Review = ({ review }) => {
  if (!review) {
    return null;
  }  

  const { rating, text, userId } = review; 

  return (
    <div>
        <Rating value={rating}/>
        <p>{`Message: ${text}`}</p>
        <UserContainer userId={userId}/>
    </div>
  );
};
