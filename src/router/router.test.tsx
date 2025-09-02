import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
   RouterProvider,
   createRouter,
   createMemoryHistory,
} from '@tanstack/react-router';
import { router as appRouter } from './router';
import { ThemeProvider } from '@/theme/theme-provider'; // ⬅️ add provider

// Helper to mount a fresh router with memory history + ThemeProvider
function renderWithRoute(initial = '/') {
   const testRouter = createRouter({
      routeTree: appRouter.options.routeTree,
      history: createMemoryHistory({ initialEntries: [initial] }),
   });

   const ui = render(
      <ThemeProvider>
         <RouterProvider router={testRouter} />
      </ThemeProvider>
   );
   return { ...ui, router: testRouter };
}

describe('App Router', () => {
   it('renders the layout header and brand link', async () => {
      renderWithRoute('/');

      // Wait for initial match/transition
      expect(
         await screen.findByRole('link', { name: /nutricia-danone/i })
      ).toBeInTheDocument();

      expect(
         await screen.findByRole('link', { name: /home/i })
      ).toBeInTheDocument();
      expect(
         await screen.findByRole('link', { name: /about/i })
      ).toBeInTheDocument();

      // Theme toggle is present (from Layout)
      expect(
         await screen.findByRole('button', { name: /toggle theme/i })
      ).toBeInTheDocument();
   });

   it('renders HomePage at "/" and marks Home active', async () => {
      renderWithRoute('/');

      // Heading from HomePage
      expect(
         await screen.findByRole('heading', {
            level: 2,
            name: /react \+ vite \+ tailwind \+ tanstack router \+ shadcn/i,
         })
      ).toBeInTheDocument();

      // Active link settles asynchronously
      const homeLink = await screen.findByRole('link', { name: /home/i });
      await waitFor(() =>
         expect(homeLink).toHaveAttribute('aria-current', 'page')
      );
   });

   it('navigates to About via link click and marks it active', async () => {
      renderWithRoute('/');

      const aboutLink = await screen.findByRole('link', { name: /about/i });
      await userEvent.click(aboutLink);

      expect(
         await screen.findByRole('heading', { level: 2, name: /about page/i })
      ).toBeInTheDocument();

      await waitFor(() =>
         expect(aboutLink).toHaveAttribute('aria-current', 'page')
      );
      const homeLink = await screen.findByRole('link', { name: /home/i });
      expect(homeLink).not.toHaveAttribute('aria-current', 'page');
   });

   it('renders AboutPage when starting at "/about"', async () => {
      renderWithRoute('/about');
      expect(
         await screen.findByRole('heading', { level: 2, name: /about page/i })
      ).toBeInTheDocument();
   });
});
