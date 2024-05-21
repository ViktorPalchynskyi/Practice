import { Reviews } from '@/app/components/Reviews/Reviews';
import { useLoadRestaurants } from '@/app/hooks/useLoadRestaurants';
import { selectReviewsByRestorantId } from '@/app/store/entities/restaurant/selectors';
import { selectIsReviewLoading } from '@/app/store/entities/review/selector';
import { loadReviewIfNotExisted } from '@/app/store/entities/review/thunks/loadReviewIfNotExisted';
import { loadUserIfNotExisted } from '@/app/store/entities/user/thunks/loadUserIfNotExisted';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const RestaurantReviewContainer = ({ restaurantId }) => {
    const reviewId = useSelector((state) => selectReviewsByRestorantId(state, { restaurantId }));
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsReviewLoading);
    const { isRestaurantLoading } = useLoadRestaurants();

    useEffect(() => {
        dispatch(loadReviewIfNotExisted(restaurantId));
    }, [restaurantId, dispatch]);

    useEffect(() => {
        dispatch(loadUserIfNotExisted());
    }, [dispatch]);

    if (isLoading || isRestaurantLoading) {
        return <span>Loading...</span>;
    }
    
    return <Reviews reviewId={reviewId} />;
};
