import { Reviews } from '@/app/components/Reviews/Reviews';
import { selectReviewsByRestorantId } from '@/app/store/entities/restaurant/selectors';
import React from 'react';
import { useSelector } from 'react-redux';

export const RestaurantReviewContainer = ({ restaurantId }) => {
    const reviewId = useSelector((state) => selectReviewsByRestorantId(state, { restaurantId }));

    return <Reviews reviewId={reviewId} />;
};
