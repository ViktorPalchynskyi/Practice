import { useState, useLayoutEffect, useCallback } from 'react';

export const useActiveId = ({ initialActiveId, localStorageName }) => {
    const [activeId, setActiveId] = useState(initialActiveId);
    const setActiveIdWithCache = useCallback(
        (id) => {
            setActiveId(id);
            localStorage.setItem(localStorageName, id);
        },
        [localStorageName]
    );

    useLayoutEffect(() => {
        if (localStorageName) {
            const savedActiveId = localStorage.getItem(localStorageName);
            if (savedActiveId) {
                setActiveId(savedActiveId);
            }
        }
    }, []);

    return { activeId, setActiveIdWithCache };
};
