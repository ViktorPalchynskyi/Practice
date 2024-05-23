import React, { createContext, useState } from 'react';
import { AccordionContextSetter, AccordionContextValue } from '../../context/accordionContex';

export const Accordion = ({ children }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => setOpenIndex((prevIndex) => (prevIndex === index ? null : index));

    return (
        <AccordionContextValue.Provider value={{ openIndex }}>
            <AccordionContextSetter.Provider value={{ toggleIndex }}>
                <div>{children}</div>
            </AccordionContextSetter.Provider>
        </AccordionContextValue.Provider>
    );
};
