import { Menu } from "../Menu/Menu";
import { NewReviewFrom } from "../NewReviewForm/NewReviewFrom";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews, id } = restaurant;
  
  return (
    <div key={id}>
        <h2>{name}</h2>
        <Menu menu={menu}/>
        <Reviews reviews={reviews}/>
        <NewReviewFrom/>
    </div>
  );
};
