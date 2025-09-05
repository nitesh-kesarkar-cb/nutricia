import {
   createRootRoute,
   createRoute,
   createRouter,
   Navigate,
} from '@tanstack/react-router';
import HomePage from '@/pages/home/home';
import AboutPage from '@/pages/about/about';
import AuthLayout from '../layouts/auth-layout';
import ForgotPasswordForm from '@/components/forgot-password-form';
import ResetPasswordForm from '@/components/reset-password-form';
import AppLayout from '../layouts/app-layout';
import ShopPage from '@/pages/shop/shop';
import ContactPage from '@/pages/contact/contact';
import SignInPage from '@/pages/sign-in/sign-in';
import SignUpPage from '@/pages/sign-up/sign-up';

const rootRoute = createRootRoute();

const indexRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/',
   component: () => <Navigate to="/home" />,
});

const homeRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/home',
   component: () => <AppLayout children={<HomePage />} />,
});

const aboutRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/about',
   component: () => <AppLayout children={<AboutPage />} />,
});

const contactRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/contact',
   component: () => <AppLayout children={<ContactPage />} />,
});

const shopRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/shop',
   component: () => <AppLayout children={<ShopPage />} />,
});
const signInRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/sign-in',
   component: () => <SignInPage />,
});

const signUpRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/sign-up',
   component: () => <SignUpPage />,
});

const forgotPasswordRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/auth/forgot-password',
   component: () => <AuthLayout FormComponent={ForgotPasswordForm} />,
});

const resetPasswordRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/auth/reset-password',
   component: () => <AuthLayout FormComponent={ResetPasswordForm} />,
});

const routeTree = rootRoute.addChildren([
   indexRoute,
   aboutRoute,
   signInRoute,
   signUpRoute,
   forgotPasswordRoute,
   resetPasswordRoute,
   shopRoute,
   contactRoute,
   homeRoute,
]);

export const router = createRouter({ routeTree });

// declare module '@tanstack/react-router' {
//    interface Register {
//       router: typeof router;
//    }
// }
