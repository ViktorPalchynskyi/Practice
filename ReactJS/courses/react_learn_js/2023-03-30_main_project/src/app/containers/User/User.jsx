import { User } from '@/app/components/User/User';
import { selectIsUserLoading, selectUserById } from '@/app/store/entities/user/selector';
import { loadUserIfNotExisted } from '@/app/store/entities/user/thunks/loadUserIfNotExisted';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const UserContainer = ({ userId }) => {
    const user = useSelector((state) => selectUserById(state, { userId }));
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsUserLoading);

    useEffect(() => {
        dispatch(loadUserIfNotExisted())
    }, [dispatch])

    if (!user) {
        return null;
    }

    if (isLoading) {
        return <span>Loading...</span>
    }

    return <User user={user} />;
};
