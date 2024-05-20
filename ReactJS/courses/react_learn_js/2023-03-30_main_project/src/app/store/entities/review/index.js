import { LOADING_STATUS } from '@/app/constants/loading-status';
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { loadReviewIfNotExisted } from './thunks/loadReviewIfNotExisted';

const reviewEntityAdapter = createEntityAdapter();
const initialState = reviewEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
});

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loadReviewIfNotExisted.pending, (state) => {
                state.loadingStatus = LOADING_STATUS.inProgress;
            })
            .addCase(loadReviewIfNotExisted.fulfilled, (state, { payload }) => {
                state.loadingStatus = LOADING_STATUS.finished;
                reviewEntityAdapter.setMany(state, payload);
            })
            .addCase(loadReviewIfNotExisted.rejected, (state, { payload }) => {
                state.loadingStatus = payload === LOADING_STATUS.earlyAdded ? LOADING_STATUS.finished : LOADING_STATUS.failed;
            });
    },
});
