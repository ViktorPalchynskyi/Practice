import { combineReducers, createStore } from'redux';
import { cardReducer } from './ui/card';
import { restaurantReducer } from './entities/restaurant';
import { dishReducer } from './entities/dish';

const rootReducer = combineReducers({ 
    cart: cardReducer,
    restaurant: restaurantReducer,
    dish: dishReducer,
});

export const store = createStore(rootReducer);