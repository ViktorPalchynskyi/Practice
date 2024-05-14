import { Dish } from '@/app/components/Dish/Dish';
import { selectDishById } from '@/app/store/entities/dish/selector';
import { incrementDish, decrementDish } from '@/app/store/ui/card/actions';
import { selectDishAmount } from '@/app/store/ui/card/selectors';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const DishContainer = ({ dishId }) => {
    const dish = useSelector((state) => selectDishById(state, { dishId }));
    const amount = useSelector((state) => selectDishAmount(state, { dishId }));
    const dispatch = useDispatch();
    const increment = () => dispatch(incrementDish(dishId));
    const decrement = () => dispatch(decrementDish(dishId));

    return <Dish dish={dish} amount={amount} increment={increment} decrement={decrement} />;
};
