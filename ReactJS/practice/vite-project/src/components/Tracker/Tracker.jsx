import React from 'react';
import { MouseTracker } from '../MouseTracker/MouseTracker';

export const Tracker = () => {
    return (
        <MouseTracker
            render={({ x, y }) => {
                return (
                    <>
                        <h2>X is {x}</h2>
                        <h2>Y is {y}</h2>
                    </>
                );
            }}
        />
    );
};
