import { Menu } from "@/app/components/Menu/Menu";
import { selectMenuByRestorantId } from "@/app/store/entities/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const RestaurantMenuContainer = ({ restaurantId }) => {
  const menu = useSelector((state) => selectMenuByRestorantId(state, { restaurantId }));

  if (!menu?.length) {
    return null;
  }

  return <Menu menu={menu}/>;
};
