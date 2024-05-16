import { dishSlice } from '..';
import { selectMenuByRestorantId } from '../../restaurant/selectors';
import { selectDishIds } from '../selector';

export const loadDishByRestorantIdIfNotExisted = (restaurantId) => (dispatch, getState) => {
    const restaurantMenu = selectMenuByRestorantId(getState(), { restaurantId });
    const dishIds = selectDishIds(getState());

    if (restaurantMenu.every((dishId) => dishIds.includes(dishId))) {
        return;
    }

    dispatch(dishSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`)
        .then((res) => res.json())
        .then((dishes) => dispatch(dishSlice.actions.finishLoading(dishes)))
        .catch((err) => {
            console.log(err);
            dispatch(dishSlice.actions.failLoading());
        });
};
