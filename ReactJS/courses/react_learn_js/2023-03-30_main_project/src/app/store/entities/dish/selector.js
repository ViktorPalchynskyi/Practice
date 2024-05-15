import { LOADING_STATUS } from '@/app/constants/loading-status';

export const selectDishModule = (state) => state.dish;

export const selectDishById = (state, { dishId }) => selectDishModule(state).entities[dishId];

export const selectDishLoadingStatus = (state) => selectDishModule(state).loadingStatus;

export const selectIsDishLoading = (state) => selectDishLoadingStatus(state) === LOADING_STATUS.inProgress;

export const selectDishIds = (state) => selectDishModule(state)?.ids;
