import { LOADING_STATUS } from '@/app/constants/loading-status';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    entities: [],
    ids: [],
    loadingStatus: LOADING_STATUS.idle,
};

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.loadingStatus = LOADING_STATUS.inProgress;
        },
        finishLoading: (state, { payload }) => {
            state.loadingStatus = LOADING_STATUS.finished;
            state.entities = {
                ...state.entities,
                ...payload.reduce((acc, restaurant) => {
                    acc[restaurant.id] = restaurant;

                    return acc;
                }, {}),
            };
            state.ids = Array.from(new Set([...state.ids, ...payload.map(({ id }) => id)]));
        },
        failLoading: (state) => {
            state.loadingStatus = LOADING_STATUS.failed;
        },
    },
});
