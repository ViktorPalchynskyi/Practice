import { LOADING_STATUS } from '@/app/constants/loading-status';
import { RESTAURANT_ACTIONS } from './actions';

const initialState = {
    entities: [],
    ids: [],
    loadingStatus: LOADING_STATUS.idle,
};

export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESTAURANT_ACTIONS.startLoading:
            return {
                ...state,
                loadingStatus: LOADING_STATUS.inProgress,
            };
        case RESTAURANT_ACTIONS.finishLoading:
            return {
                entities: action.payload.reduce((acc, restaurant) => {
                    acc[restaurant.id] = restaurant;

                    return acc;
                }, {}),
                ids: action.payload.map(({ id }) => id),
                loadingStatus: LOADING_STATUS.finished,
            };
        case RESTAURANT_ACTIONS.failLoading:
            return {
                ...state,
                loadingStatus: LOADING_STATUS.failed,
            };

        default:
            return state;
    }
};
