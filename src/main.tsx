import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router/router';
import { ThemeProvider } from '@/theme/theme-provider';
import { LocaleProvider } from '@/i18n/locale-provider';
import '@/styles/tailwind.css';
import '@/i18n/i18n';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
   throw new Error('Add your Clerk Publishable Key to the .env file');
}

const rootElement = document.getElementById('root');
if (!rootElement) {
   throw new Error("Root element with id 'root' not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
   <React.StrictMode>
      <LocaleProvider>
         <ThemeProvider>
            <ClerkProvider
               publishableKey={PUBLISHABLE_KEY}
               afterSignOutUrl="/sign-in"
            >
               <RouterProvider router={router} />
            </ClerkProvider>
         </ThemeProvider>
      </LocaleProvider>
   </React.StrictMode>
);
