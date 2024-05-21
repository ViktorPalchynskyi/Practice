import { LOADING_STATUS } from '@/app/constants/loading-status';
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { loadUserIfNotExisted } from './thunks/loadUserIfNotExisted';

const userEntityAdapter = createEntityAdapter();

const initialState = userEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loadUserIfNotExisted.pending, (state) => {
                state.loadingStatus = LOADING_STATUS.inProgress;
            })
            .addCase(loadUserIfNotExisted.fulfilled, (state, { payload }) => {
                state.loadingStatus = LOADING_STATUS.finished;
                userEntityAdapter.setAll(state, payload);
            })
            .addCase(loadUserIfNotExisted.rejected, (state, action) => {
                state.loadingStatus = action.payload === LOADING_STATUS.earlyAdded ? LOADING_STATUS.finished : LOADING_STATUS.failed;
            });
    },
});
