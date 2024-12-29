import Image from 'next/image';
import type { WorkplaceProps } from '@/types';

const Workplace = ({
  title,
  company,
  imageSrc,
  time,
  location,
  description,
}: WorkplaceProps) => {
  return (
    <li className="transition-opacity" key={company}>
      <div className="flex gap-4">
        <Image
          src={imageSrc}
          alt={company}
          width={48}
          height={48}
          className="mb-auto rounded-full"
        />
        <div className="flex-1">
          <p className="font-medium">{title}</p>
          <p className="text-secondary">{company}</p>
        </div>
        <div className="ml-auto shrink-0 text-right">
          <p className="text-sm text-secondary">{time}</p>
          <p className="mt-0.5 text-sm text-secondary">{location}</p>
        </div>
      </div>
      {description && (
        <p className="mt-2 text-sm text-secondary">{description}</p>
      )}
    </li>
  );
};

export default Workplace;
