import { Menu } from '@/app/components/Menu/Menu';
import { selectIsDishLoading } from '@/app/store/entities/dish/selector';
import { loadDishByRestorantIdIfNotExisted } from '@/app/store/entities/dish/thunk/loadDishByRestorantIdIfNotExisted';
import { selectMenuByRestorantId } from '@/app/store/entities/restaurant/selectors';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const RestaurantMenuContainer = ({ restaurantId }) => {
    const menu = useSelector((state) => selectMenuByRestorantId(state, { restaurantId }));
    const isLoading = useSelector(selectIsDishLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDishByRestorantIdIfNotExisted(restaurantId));
    }, [restaurantId, dispatch]);

    if (!menu?.length) {
        return null;
    }

    if (isLoading) {
        return <span>Loading...</span>;
    }

    return <Menu menu={menu} />;
};
