import React from 'react';
import styles from './styles.module.css';

export const FilmInfo = ({ title, genre, seasonsCount }) => {
    return (
        <>
            <p className={styles.title}>{title || 'Unknow'}</p>
            {Boolean(genre) && <p>{genre}</p>}
            <p>{seasonsCount > 0 ? `Seson count ${seasonsCount}` : 'none'}</p>
        </>
    );
};
