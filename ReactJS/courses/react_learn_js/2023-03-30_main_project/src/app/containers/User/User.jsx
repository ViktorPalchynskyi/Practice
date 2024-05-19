import { User } from '@/app/components/User/User';
import { selectIsUserLoading, selectUserById } from '@/app/store/entities/user/selector';
import React from 'react';
import { useSelector } from 'react-redux';

export const UserContainer = ({ userId }) => {
    const user = useSelector((state) => selectUserById(state, { userId }));
    const isLoading = useSelector(selectIsUserLoading);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (!user) {
        return null;
    }

    return <User user={user} />;
};
