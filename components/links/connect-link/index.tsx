import Link from 'next/link';
import cn from 'clsx';
import { LinkProps } from '../connect-links';
import { BsArrowUpRight } from '@/components/shared/icons';

interface ConnectLinkProps extends LinkProps {
  filled?: boolean;
}

const ConnectLink = ({ href, label, icon, filled }: ConnectLinkProps) => {
  return (
    <li className='transition-opacity text-primary' key={label}>
      <Link
        href={href}
        className={cn(
          'transition-opacity no-underline block rounded-lg p-4',
          filled ? 'bg-tertiary' : 'border border-secondary/30'
        )}
        target='_blank'
      >
        <div className='flex items-center gap-3'>
          <span className='text-xl'>{icon}</span>
          {label}
          <div className='w-4 h-4 ml-auto'>
            <BsArrowUpRight />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ConnectLink;
