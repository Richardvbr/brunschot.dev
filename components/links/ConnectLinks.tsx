import cn from 'clsx';
import { FaGithub, FaLinkedin, MdEmail } from '@/components/shared/Icons';
import ConnectLink from './ConnectLink';

export interface LinkProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

type ConnectLinksProps = {
  filled: boolean;
  center?: boolean;
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

const ConnectLinks = ({ filled, center, className }: ConnectLinksProps) => {
  return (
    <ul
      className={cn(
        'animated-list flex w-full flex-col gap-2 lg:gap-3',
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
          center={center}
        />
      ))}
    </ul>
  );
};

export default ConnectLinks;
