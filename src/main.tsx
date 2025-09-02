import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { router } from './router/router';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
   throw new Error("Root element with id 'root' not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
