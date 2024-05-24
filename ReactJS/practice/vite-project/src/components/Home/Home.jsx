import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { LabelWithContext } from '../Label/Label';
import { Accordion } from '../Accordion/Accordion';
import { AccordionItem } from '../Accordion/AccordionItem';
import { AccordionHeader } from '../Accordion/AccordionHeader';
import { AccordionPanel } from '../Accordion/AccordionPanel';
import { MouseTracker } from '../MouseTracker/MouseTracker';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../Modal/Modal';
import { Film } from '../Film/Film';

export const Home = () => {
    const [count, setCount] = useState(0);
    const { isOpen, openModal, closeModal } = useModal(false);

    return (
        <>
            <div>Home</div>
            <Film />
            <Button onClick={() => setCount((count) => count + 1)} count={count} />
            <LabelWithContext />
            <Accordion>
                <AccordionItem index={0}>
                    <AccordionHeader>Header 1</AccordionHeader>
                    <AccordionPanel>Panel 1</AccordionPanel>
                    <AccordionPanel>Panel 2</AccordionPanel>
                    <AccordionPanel>Panel 3</AccordionPanel>
                    <AccordionPanel>Panel 4</AccordionPanel>
                    <AccordionPanel>Panel 5</AccordionPanel>
                    <AccordionPanel>Panel 6</AccordionPanel>
                </AccordionItem>
            </Accordion>
            <button onClick={openModal}>Open modal</button>
            <MouseTracker
                render={({ x, y }) => {
                    return (
                        <>
                            <h2>X is {x}</h2>
                            <h2>Y is {y}</h2>
                        </>
                    );
                }}
            />
            <Modal isOpen={isOpen} onClose={closeModal}>
                <p>This is a modal window</p>
            </Modal>
        </>
    );
};
