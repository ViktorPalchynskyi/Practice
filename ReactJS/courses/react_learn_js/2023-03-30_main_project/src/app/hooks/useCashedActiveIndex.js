import { useState, useLayoutEffect, useCallback } from 'react';

export const useCachedActiveIndex = ({ initialIndex = 0, localStorageIndexName }) => {
    const [activetIndex, setActivetIndex] = useState(initialIndex);
    const setActivetIndexWithCache = useCallback((index) => {
        setActivetIndex(index);
        localStorage.setItem(localStorageIndexName, index); 
    }, localStorageIndexName);

    useLayoutEffect(() => {
        const savedActiveIndex = Number(localStorage.getItem(localStorageIndexName));

        if (savedActiveIndex) {
            setActivetIndex(savedActiveIndex); 
        }
     }, []);

     return { activetIndex, setActivetIndexWithCache };
}