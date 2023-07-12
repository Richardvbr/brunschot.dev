import type { ReactNode } from 'react';
import Header from '../header';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='bg-primary text-100'>{children}</main>
    </>
  );
};

export default Layout;
