import { fireEvent, render, screen } from '@testing-library/react';
import App from '../components/App';
import React from 'react';
import { Button } from '../components/Button/Button';

describe('test home component', () => {
    it('render Home', () => {
        render(<App />);
        const hedingElement = screen.getByText(/Home/i);
        expect(hedingElement).toBeInTheDocument();
    });

    it('should invoke callback', () => {
        const mock = jest.fn();
        render(<Button onClick={mock} />);
        const button = screen.getByText('Count:');

        fireEvent.click(button);
        expect(mock).toHaveBeenCalledTimes(1);
    });
});
