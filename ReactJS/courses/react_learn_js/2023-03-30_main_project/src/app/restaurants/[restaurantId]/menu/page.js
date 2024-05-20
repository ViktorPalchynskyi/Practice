'use client';

import { useRouter, useParams } from 'next/navigation';
import { RestaurantMenuContainer } from '@/app/containers/RestautantMenu/RestaurantMenu';
import React from 'react';

export default function MenuPage() {
    const params = useParams();
    const restaurantId = params.restaurantId;
    const router = useRouter();
    
    const handleBackClick = () => router.push(`/restaurants/${restaurantId}`)

    return (
        <>
            <button onClick={handleBackClick}>Go back</button>
            <RestaurantMenuContainer restaurantId={restaurantId} />
        </>
    );
}
