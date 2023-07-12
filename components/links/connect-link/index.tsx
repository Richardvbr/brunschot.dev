import Link from 'next/link';
import cn from 'clsx';
import { LinkProps } from '../connect-links';

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
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5 ml-auto text-primary'
          >
            <path
              fillRule='evenodd'
              d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </Link>
    </li>
  );
};

export default ConnectLink;
