import { combineReducers } from 'redux';
import { cardReducer } from './ui/card';
import { restaurantReducer } from './entities/restaurant';
import { dishSlice } from './entities/dish';
import { userReducer } from './entities/user';
import { reviewReducer } from './entities/review/inedex';
import { configureStore } from '@reduxjs/toolkit';
import { logger } from './middlewares/logger';

const rootReducer = combineReducers({
    cart: cardReducer,
    restaurant: restaurantReducer,
    dish: dishSlice.reducer,
    user: userReducer,
    review: reviewReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMidlleware) => getDefaultMidlleware().concat([logger]),
    devTools: true,
});
