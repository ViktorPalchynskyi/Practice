import { RestaurantCart } from '@/app/components/RestaurantCart/RestaurantCart';
import { selectRestaurantById } from '@/app/store/entities/restaurant/selectors';
import React from 'react';
import { useSelector } from 'react-redux';

export const RestaurantCartContainer = ({ restaurantId }) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, { restaurantId }));

    return <RestaurantCart restaurant={restaurant} />;
};
