import { Home } from '@/app/components/Home/Home';
import { loadRestaurantIfNotExisted } from '@/app/store/entities/restaurant/middlewares/thunks/loadRestaurantIfNotExisted';
import { selectIsRestaurantLoading } from '@/app/store/entities/restaurant/selectors';
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
