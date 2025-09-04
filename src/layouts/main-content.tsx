import { LanguageSwitcher } from '@/components/language-switcher/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle/theme-toggle';

type LayoutProps = {
   children?: React.ReactNode;
};

const MainContent: React.FC<LayoutProps> = ({ children }) => {
   return (
      <div className="flex h-full flex-col">
         <header className="sticky top-0 z-10 flex items-center justify-between px-6 py-3 shadow-md">
            <h1 className="text-2xl font-bold">Playground</h1>
            <div className="flex items-center space-x-4">
               <LanguageSwitcher />
               <ThemeToggle />
            </div>
         </header>

         <div className="flex-grow p-6">{children}</div>
      </div>
   );
};
export default MainContent;
