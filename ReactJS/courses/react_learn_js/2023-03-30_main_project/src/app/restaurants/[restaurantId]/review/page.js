'use client';

import { useParams, useRouter } from 'next/navigation';

import React from 'react';
import { RestaurantReviewContainer } from '@/app/containers/RestaurantReview/RestaurantReview';
import { NewReviewForm } from '@/app/components/NewReviewForm/NewReviewForm';

export default function ReviewPage() {
    const params = useParams();
    const restaurantId = params.restaurantId;
    const router = useRouter();
    
    const handleBackClick = () => router.push(`/restaurants/${restaurantId}`)

    return (
        <>
            <button onClick={handleBackClick}>Go back</button>
            <RestaurantReviewContainer restaurantId={restaurantId} />
            <NewReviewForm />
        </>
    );
}
