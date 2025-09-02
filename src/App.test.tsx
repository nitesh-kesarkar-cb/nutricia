import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App', () => {
   it('renders "Hello World" text', () => {
      render(<App />);
      expect(screen.getByText(/hello world/i)).toBeInTheDocument();
   });

   it('renders exactly one paragraph with the expected content', () => {
      const { container } = render(<App />);
      const ps = container.querySelectorAll('p');
      expect(ps).toHaveLength(1);
      expect(ps[0]).toHaveTextContent('Hello World');
   });

   it('matches snapshot', () => {
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
   });
});
