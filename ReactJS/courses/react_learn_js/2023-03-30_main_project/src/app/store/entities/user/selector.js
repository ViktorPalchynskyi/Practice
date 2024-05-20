import { LOADING_STATUS } from "@/app/constants/loading-status";

export const selectUserModule = (state) => state?.user;

export const selectUserById = (state, { userId }) => selectUserModule(state)?.entities[userId];

export const selectUserLoadingStatus = (state) => selectUserModule(state)?.loadingStatus;

export const selectIsUserLoading = (state) => selectUserLoadingStatus(state) === LOADING_STATUS.inProgress;

export const selectUserIds = (state) => selectUserModule(state)?.ids;