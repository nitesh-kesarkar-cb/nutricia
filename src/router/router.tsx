import {
   createRootRoute,
   createRoute,
   createRouter,
   Navigate,
} from '@tanstack/react-router';
import HomePage from '@/pages/home/home';
import AboutPage from '@/pages/about/about';
import AuthLayout from '../layouts/auth-layout';
import LoginForm from '@/components/login-form';
import SignupForm from '@/components/signup-form';
import ForgotPasswordForm from '@/components/forgot-password-form';
import ResetPasswordForm from '@/components/reset-password-form';
import AppLayout from '../layouts/app-layout';
import ShopPage from '@/pages/shop/shop';
import ContactPage from '@/pages/contact/contact';

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

const loginRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/auth/login',
   component: () => <AuthLayout FormComponent={LoginForm} />,
});

const signupRoute = createRoute({
   getParentRoute: () => rootRoute,
   path: '/auth/signup',
   component: () => <AuthLayout FormComponent={SignupForm} />,
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
   loginRoute,
   signupRoute,
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
