import { Dish } from "../Dish/Dish";

export const Menu = ({ menu }) => {
  if (!menu?.length) {
    return null;
  }

  return (
    <div>
      <h3>Menu</h3>
      <ul>
        {menu.map(dish => (
          <li  key={dish?.id}>
            <Dish dish={dish}/>
          </li>
        ))}
      </ul>
    </div>
  );
};
