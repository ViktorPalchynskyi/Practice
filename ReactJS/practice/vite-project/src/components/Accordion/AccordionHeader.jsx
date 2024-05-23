import React from 'react';

export const AccordionHeader = ({ children, onClick, isOpen }) => {
    return (
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
            {children} {isOpen ? '-' : '+'}
        </div>
    );
};
