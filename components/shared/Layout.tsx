import type { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="lg:max-w-[850px] mx-auto px-4 md:px-6">{children}</main>
    </>
  );
};

export default Layout;
