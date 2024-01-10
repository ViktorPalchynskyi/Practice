import { Restaurant } from "@/app/components/Restaurant/Restaurant";
import { selectRestaurantById } from "@/app/store/entities/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, { restaurantId }))

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant}/>;
};
