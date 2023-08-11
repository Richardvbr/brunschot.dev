import Header from './Header';
import { LayoutProps } from '@/types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto px-4 md:px-6 lg:max-w-[850px]">{children}</main>
    </>
  );
};

export default Layout;
