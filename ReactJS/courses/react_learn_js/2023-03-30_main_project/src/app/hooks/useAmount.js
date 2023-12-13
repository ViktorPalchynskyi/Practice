import { useCallback, useState } from 'react';

export const useAmount = (initialAmount = 0) => {
    const [amount, setAmount] = useState(initialAmount);

    const increment = useCallback(() => setAmount(a => a + 1), []);
    const decrement = useCallback(() => setAmount(a => a - 1), []);

    return { increment, decrement, amount };
};