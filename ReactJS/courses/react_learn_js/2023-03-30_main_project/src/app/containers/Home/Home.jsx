import { Home } from '@/app/components/Home/Home';
import { selectIsRestaurantLoading } from '@/app/store/entities/restaurant/selectors';
import { loadRestaurantIfNotExisted } from '@/app/store/entities/restaurant/thunks/loadRestaurantIfNotExisted';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const HomeContainer = () => {
    const dispatch = useDispatch();
    const isRestaurantLoading = useSelector(selectIsRestaurantLoading);

    useEffect(() => {
        dispatch(loadRestaurantIfNotExisted())
    }, [dispatch])

    if (isRestaurantLoading) {
        return <div>Loading...</div>
    }

    return <Home />;
};
