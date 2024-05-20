import React from 'react';
import { DishContainer } from '@/app/containers/Dish/Dish';

export const Cart = ({ cart }) => {
    console.log(!Object.keys(cart || {}).length);
    if (!Object.keys(cart || {}).length) {
        return <p>You didnt order anything</p>;
    }

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
