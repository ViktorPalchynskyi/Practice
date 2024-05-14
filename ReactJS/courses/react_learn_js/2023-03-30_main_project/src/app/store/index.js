import { combineReducers, createStore } from "redux";
import { cardReducer } from "./ui/card";
import { restaurantReducer } from "./entities/restaurant";
import { dishReducer } from "./entities/dish";
import { userReducer } from "./entities/user";
import { reviewReducer } from "./entities/review/inedex";

const rootReducer = combineReducers({
  cart: cardReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  user: userReducer,
  review: reviewReducer,
});

export const store = createStore(rootReducer);
