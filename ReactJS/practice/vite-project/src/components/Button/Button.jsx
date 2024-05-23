import React from 'react';

export const Button = ({ onClick, count }) => {
    return <button onClick={() => onClick()}>Count: {count}</button>;
};
