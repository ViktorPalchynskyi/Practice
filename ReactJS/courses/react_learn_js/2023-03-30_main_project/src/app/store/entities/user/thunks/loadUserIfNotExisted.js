import { userSlice } from '..';
import { selectUserIds } from '../selector';

export const loadUserIfNotExisted = () => (dispatch, getState) => {
    if (selectUserIds(getState()).length) {
        return;
    }

    dispatch(userSlice.actions.startLoading);

    fetch('http://localhost:3001/api/users')
        .then((res) => res.json())
        .then((reviews) => dispatch(userSlice.actions.finishLoading(reviews)))
        .catch((err) => dispatch(userSlice.actions.failLoading()));
};
