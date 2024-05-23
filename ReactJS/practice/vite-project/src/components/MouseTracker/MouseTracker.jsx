import React, { useEffect, useState } from 'react';

export const MouseTracker = ({ render }) => {
    const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => setCoordinate({ x: event.clientX, y: event.clientY });

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    },[]);

    return (
        <div style={{ height: '100vh' }}>
            {render(coordinate)}
        </div>
    )
};
