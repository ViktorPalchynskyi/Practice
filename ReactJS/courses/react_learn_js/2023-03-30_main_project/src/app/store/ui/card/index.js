import { CARD_ACTIONS } from "./actions";

const initialState = {};

export const cardReducer = (state = initialState, action) => {
    switch (action?.type) {
        case CARD_ACTIONS.increment:
            return {
                ...state,
                [action.payload] : state[action.payload] ? state[action.payload] + 1 : 1,
            }
        case CARD_ACTIONS.decrement:
            return {
                ...state,
                [action.payload] : state[action.payload] ? state[action.payload] - 1 : 0,
            }
        default:
            return state;
    }
};