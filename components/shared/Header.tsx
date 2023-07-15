import Link from 'next/link';
import Logo from '@/public/logo.svg';

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
    <header className="main-header relative top-0 z-20 bg-primary md:sticky">
      <nav className="mx-auto flex items-center justify-between gap-3 px-4 py-6 text-secondary md:px-6 lg:max-w-[850px]">
        <Link href="/" className="text-primary">
          <Logo />
        </Link>
        <ul className="flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                className="rounded-lg text-sm transition-colors hover:text-primary"
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
