import React from 'react';
import { DishContainer } from '@/app/containers/Dish/Dish';

export const Cart = ({ cart }) => {
    return (
        <ul>
            {Object.entries(cart).map(([id]) => (
                <li key={id}>
                    <DishContainer dishId={id} />
                </li>
            ))}
        </ul>
    );
};
