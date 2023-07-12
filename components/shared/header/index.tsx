import Logo from '@/public/logo.svg';
import Link from 'next/link';

type LinkProps = {
  label: string;
  href: string;
};

const links: LinkProps[] = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Links',
    href: '/links',
  },
];

const Header: React.FC = () => {
  return (
    <header className='relative md:sticky top-0 main-header bg-primary z-20'>
      <nav className='px-4 md:px-6 py-6 lg:max-w-[700px] mx-auto flex justify-between items-center gap-3 text-secondary'>
        <Link href='/' className='text-primary'>
          <Logo />
        </Link>
        <ul className='flex items-center gap-1'>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                className='px-4 py-2 rounded-lg text-sm hover:text-primary transition-colors'
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
