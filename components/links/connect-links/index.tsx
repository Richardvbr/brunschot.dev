import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ConnectLink from '../connect-link';

export type ConnectLinkProps = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const links: ConnectLinkProps[] = [
  {
    label: 'Email',
    href: 'mailto:richardvanbrunschot@gmail.com',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        className='w-5 h-5'
      >
        <path d='M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z' />
        <path d='M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z' />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Richardvbr',
    icon: <FaGithub />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rbrunschot/',
    icon: <FaLinkedin />,
  },
];

const ConnectLinks = () => {
  return (
    <ul
      className='w-full flex flex-col gap-2 lg:gap-3 animate-in mt-8 lg:mt-12 animated-list'
      style={{ '--index': 2 } as React.CSSProperties}
    >
      {links.map(({ label, href, icon }) => (
        <ConnectLink key={href} label={label} href={href} icon={icon} />
      ))}
    </ul>
  );
};

export default ConnectLinks;
