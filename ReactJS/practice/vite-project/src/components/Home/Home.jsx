import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { LabelWithContext } from '../Label/Label';
import { Accordion } from '../Accordion/Accordion';
import { AccordionItem } from '../Accordion/AccordionItem';
import { AccordionHeader } from '../Accordion/AccordionHeader';
import { AccordionPanel } from '../Accordion/AccordionPanel';
import { MouseTracker } from '../MouseTracker/MouseTracker';

export const Home = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>Home</div>
            <Button onClick={() => setCount((count) => count + 1)} count={count} />
            <LabelWithContext/> 
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
            <MouseTracker render={({ x, y }) => {
                return (
                    <>
                        <h2>X is {x}</h2>
                        <h2>Y is {y}</h2>
                    </>
                )
            }}/>
        </>
    );
};
