import { render, screen } from '@testing-library/react';
import App from './App';

// initial 'test' test
describe('App Component', () => {
    it('renders headline text', () => {
        render(<App />);
        
        const headline = screen.getByRole('heading', { level: 1 });

        expect(headline).toHaveTextContent('Get started');
    });
});
