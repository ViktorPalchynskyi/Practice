import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { LabelWithContext } from '../Label/Label';

export const Home = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>Home</div>
            <Button onClick={() => setCount((count) => count + 1)} count={count} />
            <LabelWithContext/> 
        </>
    );
};
