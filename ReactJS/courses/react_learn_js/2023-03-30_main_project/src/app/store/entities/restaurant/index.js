import { LOADING_STATUS } from '@/app/constants/loading-status';
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { loadRestaurantIfNotExisted } from './thunks/loadRestaurantIfNotExisted';

const restaurantEntityAdapter = createEntityAdapter();

const initialState = restaurantEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
});

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loadRestaurantIfNotExisted.pending, (state) => {
                state.loadingStatus = LOADING_STATUS.inProgress;
            })
            .addCase(loadRestaurantIfNotExisted.fulfilled, (state, { payload }) => {
                state.loadingStatus = LOADING_STATUS.finished;
                restaurantEntityAdapter.setAll(state, payload);
            })
            .addCase(loadRestaurantIfNotExisted.rejected, (state, { payload }) => {
                state.loadingStatus = payload === LOADING_STATUS.earlyAdded ? LOADING_STATUS.finished : LOADING_STATUS.failed;
            });
    },
});
