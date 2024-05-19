import { LOADING_STATUS } from '@/app/constants/loading-status';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchDishByRestaurantId } from './thunk/loadDishByRestorantIdIfNotExisted';

const dishEntityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dish',
    initialState: dishEntityAdapter.getInitialState({
        loadingStatus: LOADING_STATUS.idle,
    }),
    extraReducers: (builder) => {
        builder
            .addCase(fetchDishByRestaurantId.pending, (state) => {
                state.loadingStatus = LOADING_STATUS.inProgress;
            })
            .addCase(fetchDishByRestaurantId.fulfilled, (state, { payload }) => {
                state.loadingStatus = LOADING_STATUS.finished;
                dishEntityAdapter.setMany(state, payload);
            })
            .addCase(fetchDishByRestaurantId.rejected, (state, { payload }) => {
                state.loadingStatus = payload === LOADING_STATUS.earlyAdded ? LOADING_STATUS.finished : LOADING_STATUS.failed;
            });
    },
});
