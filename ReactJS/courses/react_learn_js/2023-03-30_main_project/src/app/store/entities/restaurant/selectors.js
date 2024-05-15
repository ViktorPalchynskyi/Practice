import { LOADING_STATUS } from '@/app/constants/loading-status';

export const selectRestaurantModule = (state) => state.restaurant;

export const selectRestaurantById = (state, { restaurantId }) => selectRestaurantModule(state).entities[restaurantId];

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

export const selectRestaurants = (state) => Object.values(selectRestaurantModule(state).entities);

export const selectMenuByRestorantId = (state, { restaurantId }) => selectRestaurantById(state, { restaurantId })?.menu;

export const selectReviewsByRestorantId = (state, { restaurantId }) => selectRestaurantById(state, { restaurantId })?.reviews;

export const selectRestaurantLoadingStatus = (state) => selectRestaurantModule(state).loadingStatus;

export const selectIsRestaurantLoading = (state) => selectRestaurantLoadingStatus(state) === LOADING_STATUS.inProgress;
