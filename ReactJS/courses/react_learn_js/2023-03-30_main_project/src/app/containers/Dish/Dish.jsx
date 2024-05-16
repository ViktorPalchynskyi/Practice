import { Dish } from '@/app/components/Dish/Dish';
import { selectDishById } from '@/app/store/entities/dish/selector';
import { cardSlice } from '@/app/store/ui/card';
import { selectDishAmount } from '@/app/store/ui/card/selectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const DishContainer = ({ dishId }) => {
    const dish = useSelector((state) => selectDishById(state, { dishId }));
    const amount = useSelector((state) => selectDishAmount(state, { dishId }));
    const dispatch = useDispatch();
    const increment = () => dispatch(cardSlice.actions.increment(dishId));
    const decrement = () => dispatch(cardSlice.actions.decrement(dishId));

    return <Dish dish={dish} amount={amount} increment={increment} decrement={decrement} />;
};
