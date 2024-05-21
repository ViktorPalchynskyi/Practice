import { LOADING_STATUS } from '@/app/constants/loading-status';
import { selectRestaurantById } from '../../restaurant/selectors';
import { selectDishIds } from '../selector';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDishByRestaurantId = createAsyncThunk('dish/fetchDishByRestaurantId', async (restaurantId, { getState, rejectedValue }) => {
    const state = getState();
    const restaurant = selectRestaurantById(state, { restaurantId });
    const dishIds = selectDishIds(state);
   
    if (restaurant?.menu.every((dishId) => dishIds.includes(dishId))) {
        return rejectedValue(LOADING_STATUS.earlyAdded);
    }

    const res = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);
    
    return await res.json();
});
