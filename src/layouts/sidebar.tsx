import {
   SignedIn,
   SignedOut,
   SignInButton,
   UserButton,
} from '@clerk/clerk-react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import {
   FaEnvelope,
   FaHome,
   FaInfoCircle,
   FaShoppingCart,
   FaSignOutAlt,
   FaUserCircle,
} from 'react-icons/fa';

const menus = [
   {
      name: 'nav.home',
      icon: <FaHome />,
      link: '/home',
   },
   {
      name: 'nav.about',
      icon: <FaInfoCircle />,
      link: '/about',
   },
   {
      name: 'nav.shop',
      icon: <FaShoppingCart />,
      link: '/shop',
   },
   {
      name: 'nav.contact',
      icon: <FaEnvelope />,
      link: '/contact',
   },
];

const Sidebar: React.FC = () => {
   const { t } = useTranslation();

   return (
      <div className="flex h-full flex-col justify-between bg-gray-800 text-white">
         <div className="flex h-full flex-col">
            {/* Brand Section */}
            <div className="border-b border-gray-700 p-3">
               <div className="flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-700">
                     <span className="text-2xl font-bold">
                        {t('brand-mini')}
                     </span>
                  </div>
                  <h2 className="ml-4 font-bold">{t('brand')}</h2>
               </div>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-2 p-4">
               {menus.map((menu) => (
                  <Link
                     key={menu.name}
                     to={menu.link}
                     className="flex items-center rounded-md px-3 py-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                  >
                     <i className="mr-3 text-xl">{menu.icon}</i>
                     {t(menu.name)}
                  </Link>
               ))}
            </nav>
         </div>

         {/* User Section */}
         <div className="border-t border-gray-700 p-4">
            <div className="flex items-center justify-between">
               <div className="flex items-center">
                  <FaUserCircle className="text-2xl" />
                  <span className="ml-2">John Doe</span>
               </div>
               <div>
                  <SignedIn>
                     <UserButton />
                  </SignedIn>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;
