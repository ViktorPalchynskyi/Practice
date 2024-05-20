import { LOADING_STATUS } from '@/app/constants/loading-status';
import { selectUserIds } from '../selector';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const loadUserIfNotExisted = createAsyncThunk('user/loadUserIfNotExisted', async (_, { getState, rejectedValue }) => {
    if (selectUserIds(getState()).length) {
        return rejectedValue(LOADING_STATUS.earlyAdded);
    }

    const res = await fetch('http://localhost:3001/api/users');
    
    return await res.json();
});
