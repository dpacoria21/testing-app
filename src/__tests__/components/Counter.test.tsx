import CounterPage from '@/components/Counter';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Counter Component test', () => {

    beforeEach(() => {
        render(<CounterPage />);
        const buttonReset = screen.getByText('Reset counter');
        fireEvent.click(buttonReset);
    })

    afterEach(async () => {

    })

    it('testing initial value', () => {
        const counter = +(screen.getByRole('paragraph').textContent)!;
        expect(counter).toEqual(0);
    })

    it('testing decrement button', () => {
        const button = screen.getByText('-');

        // Simular un click en el boton -
        fireEvent.click(button);

        const counter = +(screen.getByRole('paragraph').textContent)!;

        expect(counter).toEqual(-1);
    });

    it('testing increment button', () => {
        const button = screen.getByText('+');

        // Simular un click en el boton +

        fireEvent.click(button);

        const counter = +(screen.getByRole('paragraph').textContent)!;

        expect(counter).toEqual(1);
    });
});