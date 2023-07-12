import cn from 'clsx';
import { FaGithub, FaLinkedin, MdEmail } from '@/components/shared/icons';
import ConnectLink from '../connect-link';

export interface LinkProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

type ConnectLinksProps = {
  filled: boolean;
  className?: string;
};

const links: LinkProps[] = [
  {
    label: 'Email',
    href: 'mailto:richardvanbrunschot@gmail.com',
    icon: <MdEmail />,
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

const ConnectLinks = ({ filled, className }: ConnectLinksProps) => {
  return (
    <ul
      className={cn(
        'w-full flex flex-col gap-2 lg:gap-3 animated-list',
        className
      )}
    >
      {links.map(({ label, href, icon }) => (
        <ConnectLink
          key={href}
          label={label}
          href={href}
          icon={icon}
          filled={filled}
        />
      ))}
    </ul>
  );
};

export default ConnectLinks;
