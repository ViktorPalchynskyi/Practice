import { selectIsRestaurantLoading, selectRestaurantIds } from '@/app/store/entities/restaurant/selectors';
import { loadRestaurantIfNotExisted } from '@/app/store/entities/restaurant/thunks/loadRestaurantIfNotExisted';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useLoadRestaurants = () => {
    const dispatch = useDispatch();
    const restaurantIds = useSelector(selectRestaurantIds);
    const isRestaurantLoading = useSelector(selectIsRestaurantLoading);

    useEffect(() => {
        dispatch(loadRestaurantIfNotExisted());
    }, [dispatch]);

    return { restaurantIds, isRestaurantLoading }
};
