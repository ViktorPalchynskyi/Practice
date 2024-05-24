import { useCallback, useState } from 'react';

export const useCount = (initialValue) => {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => setCount((currentCount) => currentCount + 1), []);
    const decrement = useCallback(() => setCount((currentCount) => currentCount - 1), []);

    return { count, increment, decrement };
};
