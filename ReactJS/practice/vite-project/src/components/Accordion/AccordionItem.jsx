import React, { useContext } from 'react';
import { AccordionContextSetter, AccordionContextValue } from '../../context/accordionContex';
import { AccordionHeader } from './AccordionHeader';
import { AccordionPanel } from './AccordionPanel';

export const AccordionItem = ({ children, index }) => {
    const { openIndex } = useContext(AccordionContextValue);
    const { toggleIndex } = useContext(AccordionContextSetter);
  
    return (
        <div>
            {React.Children.map(children, (child) => {
                
                if (child.type === AccordionHeader) {
                    return React.cloneElement(child, { isOpen: openIndex === index, onClick: () => toggleIndex(index) });
                }

                if (child.type === AccordionPanel) {
                    return openIndex === index ? child : null;
                }

                return child;
            })}
        </div>
    );
};
