import Image from 'next/image';
import { WorkplaceProps } from '@/components/about/experience';
import Link from 'next/link';

const Workplace = ({
  title,
  company,
  imageSrc,
  time,
  link,
  description,
}: WorkplaceProps) => {
  const content = (
    <>
      <div className='flex items-center gap-4 flex-1'>
        <Image
          src={imageSrc}
          alt={company}
          width={48}
          height={48}
          className='rounded-full mb-auto'
        />
        <div className='flex flex-col'>
          <p>{title}</p>
          <p className='text-secondary'>{company}</p>
          <p className='mt-1 text-secondary text-sm'>{description}</p>
        </div>
      </div>
      <p className='text-secondary'>{time}</p>
    </>
  );
  return (
    <li className='transition-opacity' key={company}>
      <Link
        href={link}
        target='_blank'
        className='flex justify-between w-full px-3 py-2 -mx-3 -my-2 no-underline gap-1'
      >
        {content}
      </Link>
    </li>
  );
};

export default Workplace;
