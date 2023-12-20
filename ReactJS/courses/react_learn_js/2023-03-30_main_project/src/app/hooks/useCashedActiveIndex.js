import { useState, useLayoutEffect } from 'react';

export const useCachedActiveIndex = ({ initialIndex = 0, localStorageIndexName }) => {
    const [activetIndex, setActivetIndex] = useState(initialIndex);
    const setActivetIndexWithCache = (index) => {
        setActivetIndex(index);
        localStorage.setItem(localStorageIndexName, index); 
    };

    useLayoutEffect(() => {
        const savedActiveIndex = localStorage.getItem(localStorageIndexName);

        if (savedActiveIndex) {
            setActivetIndex(savedActiveIndex); 
        }
     }, []);

     return { activetIndex, setActivetIndexWithCache };
}