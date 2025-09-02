import { render, screen } from '@testing-library/react';
import HomePage from './home';

describe('HomePage', () => {
   it('renders the main heading', () => {
      render(<HomePage />);
      // h2 with partial, case-insensitive match
      const heading = screen.getByRole('heading', {
         level: 2,
         name: /react \+ vite \+ tailwind/i,
      });
      expect(heading).toBeInTheDocument();
   });

   it('renders the lead paragraph', () => {
      render(<HomePage />);
      expect(
         screen.getByText(/production-ready boilerplate/i)
      ).toBeInTheDocument();
   });

   it('renders all five buttons with correct labels', () => {
      render(<HomePage />);

      // Each button by accessible name
      expect(
         screen.getByRole('button', { name: /primary/i })
      ).toBeInTheDocument();
      expect(
         screen.getByRole('button', { name: /secondary/i })
      ).toBeInTheDocument();
      expect(
         screen.getByRole('button', { name: /outline/i })
      ).toBeInTheDocument();
      expect(
         screen.getByRole('button', { name: /ghost/i })
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /link/i })).toBeInTheDocument();

      // And exactly 5 buttons total
      expect(screen.getAllByRole('button')).toHaveLength(5);
   });

   it('matches snapshot', () => {
      const { asFragment } = render(<HomePage />);
      expect(asFragment()).toMatchSnapshot();
   });
});
