import Image from 'next/image';
import { WorkplaceProps } from '@/components/about/Experience';

const Workplace = ({
  title,
  company,
  imageSrc,
  time,
  location,
  description,
}: WorkplaceProps) => {
  const content = (
    <>
      <div className="flex gap-4">
        <Image
          src={imageSrc}
          alt={company}
          width={48}
          height={48}
          className="mb-auto rounded-full"
        />
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-secondary">{company}</p>
        </div>
        <div className="ml-auto shrink-0">
          <p className="text-sm text-secondary">{time}</p>
          <p className="text-right text-sm text-secondary">{location}</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-secondary">{description}</p>
    </>
  );
  return (
    <li className="transition-opacity" key={company}>
      <div className="w-full gap-1 no-underline">{content}</div>
    </li>
  );
};

export default Workplace;
