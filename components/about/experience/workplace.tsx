import Image from 'next/image';
import { WorkplaceProps } from './workplaces';
import Link from 'next/link';

const Workplace = ({
  title,
  company,
  imageSrc,
  time,
  link,
}: WorkplaceProps) => {
  const content = (
    <>
      <div className='flex items-center gap-4'>
        <Image
          src={imageSrc}
          alt={company}
          width={48}
          height={48}
          className='rounded-full'
        />
        <div className='flex flex-col gap-px'>
          <p className={link ? 'external-arrow' : ''}>{title}</p>
          <p className='text-secondary'>{company}</p>
        </div>
      </div>
      {time && <p className='text-secondary'>{time}</p>}
    </>
  );
  return (
    <li className='transition-opacity' key={company}>
      <Link
        href={link}
        target='_blank'
        className='flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline'
      >
        {content}
      </Link>
    </li>
  );
};

export default Workplace;
