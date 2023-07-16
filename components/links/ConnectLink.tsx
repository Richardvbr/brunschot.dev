import Link from 'next/link';
import cn from 'clsx';
import type { LinkProps } from './ConnectLinks';
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
    <li className="text-primary transition-opacity" key={label}>
      <Link
        href={href}
        className={cn(
          'block max-w-sm rounded-lg p-4 no-underline transition-opacity',
          filled ? 'bg-tertiary' : 'border border-secondary/30',
          center && 'mx-auto'
        )}
        target="_blank"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{icon}</span>
          {label}
          <div className="ml-auto h-4 w-4">
            <BsArrowUpRight />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ConnectLink;
