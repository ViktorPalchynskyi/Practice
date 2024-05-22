import React, { useEffect, useRef, useState } from 'react';

export const Timer = () => {
    const time = useRef(0);
    const [isHelloVisible, setIsHelloVisible] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            time.current = time.current + 1;

            if (time.current > 5) {
                setIsHelloVisible(true);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return <div>{isHelloVisible && <span>Hello there!</span>}</div>;
};
