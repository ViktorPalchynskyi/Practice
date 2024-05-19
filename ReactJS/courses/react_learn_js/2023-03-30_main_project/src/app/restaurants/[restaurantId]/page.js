'use client'

import { RestaurantContainer } from '@/app/containers/Restaurant/Restaurant';

export default function CurrentRestaurantPage({ params }) {
    const { restaurantId } = params;

    return <RestaurantContainer restaurantId={restaurantId} />;
}
