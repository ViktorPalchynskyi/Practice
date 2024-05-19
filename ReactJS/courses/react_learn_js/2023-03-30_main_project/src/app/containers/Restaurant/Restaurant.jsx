import { Restaurant } from "@/app/components/Restaurant/Restaurant";
import { useLoadRestaurants } from "@/app/hooks/useLoadRestaurants";
import { selectRestaurantById } from "@/app/store/entities/restaurant/selectors";
import React from "react";
import { useSelector } from "react-redux";

export const RestaurantContainer = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, { restaurantId }))
  const { isRestaurantLoading } = useLoadRestaurants();


  if (!restaurant) {
    return null;
  }


  if (isRestaurantLoading) {
      return <div>Loading...</div>;
  }

  return <Restaurant restaurant={restaurant}/>;
};
