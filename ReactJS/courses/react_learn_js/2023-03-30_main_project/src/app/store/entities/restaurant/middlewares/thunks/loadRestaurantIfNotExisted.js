import { RESTAURANT_ACTIONS, failLoadingRestaurants, finishLoadingRestaurants, startLoadingRestaurants } from '../../actions';
import { selectRestaurantIds } from '../../selectors';

export const loadRestaurantIfNotExisted = () => (dispatch, getState) => {
    if (selectRestaurantIds(getState()).length) {
        return;
    }

    dispatch(startLoadingRestaurants());

    fetch('http://localhost:3001/api/restaurants')
        .then((response) => response.json())
        .then((restaurants) => dispatch(finishLoadingRestaurants(restaurants)))
        .catch((err) => dispatch(failLoadingRestaurants()));
};
