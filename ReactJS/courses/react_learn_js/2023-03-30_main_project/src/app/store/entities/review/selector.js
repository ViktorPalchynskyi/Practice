import { LOADING_STATUS } from '@/app/constants/loading-status';

export const selectReviewModule = (state) => state.review;

export const selectReviewById = (state, { reviewId }) => selectReviewModule(state)?.entities[reviewId];

export const selectReviewLoadingStatus = (state) => selectReviewModule(state).loadingStatus;

export const selectIsReviewLoading = (state) => selectReviewLoadingStatus(state) === LOADING_STATUS.inProgress;

export const selectReviewIds = (state) => selectReviewModule(state)?.ids;
