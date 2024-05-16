import { userSlice } from '..';
import { selectUserModule } from '../selector';

export const loadUserIfNotExisted = () => (dispatch, getState) => {
    const userIds = selectUserModule(getState());

    if (userIds.length) {
        return;
    }

    dispatch(userSlice.actions.startLoading);

    fetch('http://localhost:3001/api/users')
        .then((res) => res.json())
        .then((reviews) => dispatch(userSlice.actions.finishLoading(reviews)))
        .catch((err) => dispatch(userSlice.actions.failLoading()));
};
