import { Menu } from "../Menu/Menu";
import { Reviews } from "../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name, menu, reviews, id } = restaurant;
  
  return (
    <div key={id}>
        <h3>{name}</h3>
        <Menu menu={menu}/>
        <Reviews reviews={reviews}/>
    </div>
  );
};
