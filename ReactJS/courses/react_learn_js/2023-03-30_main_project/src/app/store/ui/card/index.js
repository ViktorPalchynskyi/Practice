import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        increment: (state, { payload }) => {
            state[payload] = state[payload] ? state[payload] + 1 : 1;
        },
        decrement: (state, { payload }) => {
            state[payload] = state[payload] ? state[payload] - 1 : 1;
        },
    },
});

