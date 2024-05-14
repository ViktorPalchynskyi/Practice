const { normalizedUsers } = require("@/app/constants/normalized-fixtures");

const initialState = {
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;

    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

export const userReducer = (state = initialState, action) => state;
