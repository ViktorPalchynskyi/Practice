import React, { createContext, useContext, useState } from 'react';
import { Button } from './components/Button/Button';

function hof(f) {
    return () => {};
}

const ToggleContext = createContext();
const ToggleSetContext = createContext();

export const Toggle = ({ children }) => {
    const [isOn, setIsOn] = useState(false);

    return (
        <ToggleContext.Provider value={{ isOn }}>
            <ToggleSetContext.Provider value={{ toggle: () => setIsOn((isOn) => !isOn) }}>{children}</ToggleSetContext.Provider>
        </ToggleContext.Provider>
    );
};

export const ToggleButton = () => {
    const { toggle } = useContext(ToggleSetContext);

    return <button onClick={toggle}>Toggle</button>;
};

export const ToggleWithCustomButton = () => {
    const { toggle } = useContext(ToggleSetContext);

    return <Button onClick={toggle}>Toggle</Button>;
};

export const ToggleLabelOn = () => {
    const { isOn } = useContext(ToggleContext);

    return isOn ? <h3>On</h3> : null;
};

export const ToggleLableOff = () => {
    const { isOn } = useContext(ToggleContext);

    return !isOn ? <h3>Off</h3> : null;
};

export const ToggleLable = () => {
    const { isOn } = useContext(ToggleContext);

    return <h3>{isOn ? 'Active' : 'Inactive'}</h3>;
};

export const LayoutRenderProps = ({ renderHeader, renderFooter, children }) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <header>{renderHeader(count)}</header>
            <button onClick={() => setCount((curCount) => curCount + 1)}>Click me</button>
            {children}
            <footer>{renderFooter(count)}</footer>
        </div>
    );
};
