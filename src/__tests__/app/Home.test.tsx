import { render, screen } from '@testing-library/react';
import Home from '@/app/page';


describe('Home Page testing', () => {
    it('render title of home page', () => {
        render(<Home />);
        expect(screen.getByText('Counter App')).toBeInTheDocument();
    });
});