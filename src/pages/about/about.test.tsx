import { render, screen } from '@testing-library/react';
import AboutPage from './about'; // adjust the path/name if your file differs

describe('AboutPage', () => {
   it('renders the main heading', () => {
      render(<AboutPage />);
      const heading = screen.getByRole('heading', {
         level: 2,
         name: /about page/i,
      });
      expect(heading).toBeInTheDocument();
   });

   it('renders exactly one h2', () => {
      render(<AboutPage />);
      expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1);
   });

   it('matches snapshot', () => {
      const { asFragment } = render(<AboutPage />);
      expect(asFragment()).toMatchSnapshot();
   });
});
