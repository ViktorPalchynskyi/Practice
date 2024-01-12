import { useSelector } from "react-redux";
import React from "react";
import { selectCartModule } from "@/app/store/ui/card/selectors";
import { DishContainer } from "@/app/containers/Dish/Dish";

export const Cart = () => {
  const cartState = useSelector(selectCartModule);
  
  return (
    <ul>
        {Object.entries(cartState).map(([id]) => (
            <li key={id}>
                <DishContainer dishId={id}/>
            </li>
        ))}
    </ul>
  );
};
