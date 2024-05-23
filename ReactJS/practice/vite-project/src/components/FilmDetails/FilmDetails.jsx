import React, { useState } from 'react';
import { useCount } from '../../hooks/useCount';
import { FilmInfo } from '../FilmInfo/FilmInfo';

export const FilmDetails = ({ title, genre, seasonsCount }) => {
    const { increment, decrement, count } = useCount(0);

    return (
        <div>
            <FilmInfo title={title} genre={genre} seasonsCount={seasonsCount} />
            <div>
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    );
};
