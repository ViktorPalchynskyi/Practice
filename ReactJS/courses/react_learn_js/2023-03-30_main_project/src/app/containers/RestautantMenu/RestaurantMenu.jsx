import { Menu } from '@/app/components/Menu/Menu';
import { useLoadRestaurants } from '@/app/hooks/useLoadRestaurants';
import { selectIsDishLoading } from '@/app/store/entities/dish/selector';
import { fetchDishByRestaurantId } from '@/app/store/entities/dish/thunk/loadDishByRestorantIdIfNotExisted';
import { selectMenuByRestorantId } from '@/app/store/entities/restaurant/selectors';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const RestaurantMenuContainer = ({ restaurantId }) => {
    const menu = useSelector((state) => selectMenuByRestorantId(state, { restaurantId }));
    const isLoading = useSelector(selectIsDishLoading);
    const dispatch = useDispatch();
    const { isRestaurantLoading } = useLoadRestaurants();
    
    useEffect(() => {
        dispatch(fetchDishByRestaurantId(restaurantId));
    }, [restaurantId, dispatch]);

    if (!menu?.length) {
        return null;
    }

    if (isLoading || isRestaurantLoading) {
        return <span>Loading...</span>;
    }

    return <Menu menu={menu} />;
};
