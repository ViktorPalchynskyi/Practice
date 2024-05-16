import { combineReducers } from 'redux';
import { cardSlice } from './ui/card';
import { restaurantSlice } from './entities/restaurant';
import { dishSlice } from './entities/dish';
import { userSlice } from './entities/user';
import { reviewSlice } from './entities/review';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from './middlewares/logger';

const rootReducer = combineReducers({
    cart: cardSlice.reducer,
    restaurant: restaurantSlice.reducer,
    dish: dishSlice.reducer,
    user: userSlice.reducer,
    review: reviewSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMidlleware) => getDefaultMidlleware().concat([logger]),
    devTools: true,
});
