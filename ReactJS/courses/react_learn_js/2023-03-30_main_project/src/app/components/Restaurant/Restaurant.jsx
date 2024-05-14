import { useRef } from 'react';
import { NewReviewFrom } from '../NewReviewForm/NewReviewFrom';
import { RestaurantMenuContainer } from '@/app/containers/RestautantMenu/RestaurantMenu';
import { RestaurantReviewContainer } from '@/app/containers/RestaurantReview/RestaurantReview';

export const Restaurant = ({ restaurant }) => {
    const { name, id } = restaurant || {};

    const ref = useRef();

    return (
        <div ref={ref} key={id}>
            <h2>{name}</h2>
            <RestaurantMenuContainer restaurantId={id} />
            <RestaurantReviewContainer restaurantId={id} />
            <NewReviewFrom />
        </div>
    );
};
