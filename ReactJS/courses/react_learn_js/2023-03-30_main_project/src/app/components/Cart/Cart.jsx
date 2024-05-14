import React from 'react';
import { DishContainer } from '@/app/containers/Dish/Dish';

export const Cart = ({ cartState }) => {
    return (
        <ul>
            {Object.entries(cartState).map(([id]) => (
                <li key={id}>
                    <DishContainer dishId={id} />
                </li>
            ))}
        </ul>
    );
};
