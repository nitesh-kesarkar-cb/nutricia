import { Outlet } from '@tanstack/react-router';
import MainContent from './main-content';
import Sidebar from './sidebar';
import React from 'react';
import PrivateArea from './private-area';

type AppLayoutProps = {
   children?: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
   return (
      <PrivateArea>
         <div className="flex h-screen">
            <div className="w-64 border-r border-gray-200">
               <Sidebar />
            </div>

            <div className="flex-grow">
               <MainContent children={children} />
            </div>
         </div>
      </PrivateArea>
   );
};

export default AppLayout;
