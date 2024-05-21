import { LOADING_STATUS } from '@/app/constants/loading-status';
import { selectRestaurantById } from '../../restaurant/selectors';
import { selectReviewIds } from '../selector';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadReviewIfNotExisted = createAsyncThunk('review/loadReviewIfNotExisted', async (restaurantId, { getState, rejectedValue }) => {
    const restaurant = selectRestaurantById(getState(), { restaurantId });
    const reviewIds = selectReviewIds(getState());

    if (restaurant?.every((reviewId) => reviewIds.includes(reviewId))) {
        return rejectedValue(LOADING_STATUS.earlyAdded);
    }

    const res = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);

    return res.json();
});

