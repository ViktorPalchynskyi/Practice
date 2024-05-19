import { Restaurants } from '@/app/components/Restaurants/Restaurants';
import { useLoadRestaurants } from '@/app/hooks/useLoadRestaurants';
import React from 'react';

export const RestaurantsContainer = () => {
    const { restaurantIds, isRestaurantLoading } = useLoadRestaurants();

    if (isRestaurantLoading) {
        return <div>Loading...</div>;
    }

    return <Restaurants restaurantIds={restaurantIds} />;
};
