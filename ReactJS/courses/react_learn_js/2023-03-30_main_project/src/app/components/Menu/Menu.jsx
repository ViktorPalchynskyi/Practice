import { Dish } from "../Dish/Dish";

export const Menu = ({ menu }) => {
  if (!menu) {
    return null;
  }

  return (
    <div key={menu.id}>
      <h3>Menu</h3>
      {menu.map(dish => <Dish dish={dish}/>)}
    </div>
  );
};
