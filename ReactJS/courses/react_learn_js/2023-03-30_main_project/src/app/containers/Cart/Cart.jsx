import { Cart } from '@/app/components/Cart/Cart';
import { selectCartModule } from '@/app/store/ui/card/selectors';
import React from 'react';
import { useSelector } from 'react-redux';

export const CartContainer = () => {
    const cart = useSelector(selectCartModule);

    return <Cart cart={cart} />;
};
