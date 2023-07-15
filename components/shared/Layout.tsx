import type { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto px-4 md:px-6 lg:max-w-[850px]">{children}</main>
    </>
  );
};

export default Layout;
