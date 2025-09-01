import {
   createRootRoute,
   createRoute,
   createRouter,
   Outlet,
   Link,
} from '@tanstack/react-router';
import HomePage from '@/pages/home';
import AboutPage from '@/pages/about';

function Layout() {
   return (
      <div className="min-h-screen">
         <header className="border-b">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
               <Link to="/" className="text-lg font-semibold">
                  Nutricia-Danone
               </Link>
               <nav className="flex gap-4 text-sm">
                  <Link to="/" className="[&.active]:font-semibold">
                     Home
                  </Link>
                  <Link to="/about" className="[&.active]:font-semibold">
                     About
                  </Link>
               </nav>
            </div>
         </header>
         <main className="mx-auto max-w-7xl px-4 py-8">
            <Outlet />
         </main>
      </div>
   );
}

const rootRoute = createRootRoute({ component: Layout });
const indexRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/',
   component: HomePage,
});
const aboutRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/about',
   component: AboutPage,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute]);

export const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
   interface Register {
      router: typeof router;
   }
}
