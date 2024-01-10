export const CARD_ACTIONS = {
    increment: 'cart/increment',
    decrement: 'cart/decrement',
};

export const incrementDish = (dishId) => ({ type: CARD_ACTIONS.increment, payload: dishId });

export const decrementDish = (dishId) => ({ type: CARD_ACTIONS.decrement, payload: dishId });