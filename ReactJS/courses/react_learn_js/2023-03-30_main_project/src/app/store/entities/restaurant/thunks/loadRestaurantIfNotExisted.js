import { LOADING_STATUS } from '@/app/constants/loading-status';
import { selectRestaurantIds } from '../selectors';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadRestaurantIfNotExisted = createAsyncThunk('restaurant/loadRestaurantIfNotExisted', async (_, { getState, rejectValue }) => {
    if (selectRestaurantIds(getState()).length) {
        return rejectValue(LOADING_STATUS.earlyAdded);
    }

    const res = await fetch('http://localhost:3001/api/restaurants');
    
    return await res.json();
});
