import { reviewSlice } from '..';
import { selectReviewsByRestorantId } from '../../restaurant/selectors';
import { selectReviewIds } from '../selector';

export const loadReviewIfNotExisted = (restaurantId) => (dispatch, getState) => {
    const restaurantMenu = selectReviewsByRestorantId(getState(), { restaurantId });
    const reviewIds = selectReviewIds(getState());

    if (restaurantMenu?.every((reviewId) => reviewIds.includes(reviewId))) {
        return;
    }

    dispatch(reviewSlice.actions.startLoading());

    fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)
        .then((res) => res.json())
        .then((reviews) => dispatch(reviewSlice.actions.finishLoading(reviews)))
        .catch((err) => dispatch(reviewSlice.actions.failLoading()));
};
