import Link from 'next/link';
import cn from 'clsx';
import { LinkProps } from './ConnectLinks';
import { BsArrowUpRight } from '@/components/shared/Icons';

interface ConnectLinkProps extends LinkProps {
  filled?: boolean;
  center?: boolean;
}

const ConnectLink = ({
  href,
  label,
  icon,
  filled,
  center,
}: ConnectLinkProps) => {
  return (
    <li className="transition-opacity text-primary" key={label}>
      <Link
        href={href}
        className={cn(
          'transition-opacity max-w-sm no-underline block rounded-lg p-4',
          filled ? 'bg-tertiary' : 'border border-secondary/30',
          center && 'mx-auto'
        )}
        target="_blank"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          {label}
          <div className="w-4 h-4 ml-auto">
            <BsArrowUpRight />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ConnectLink;
