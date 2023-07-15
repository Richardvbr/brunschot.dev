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
          className="rounded-full mb-auto shrink-0"
        />
        <div>
          <p>{title}</p>
          <p className="text-secondary">{company}</p>
        </div>
        <div className="ml-auto">
          <p className="text-secondary text-sm shrink-0">{time}</p>
          <p className="text-secondary text-right text-sm shrink-0">
            {location}
          </p>
        </div>
      </div>
      <p className="mt-2 text-secondary text-sm">{description}</p>
    </>
  );
  return (
    <li className="transition-opacity" key={company}>
      <div className="w-full no-underline gap-1">{content}</div>
    </li>
  );
};

export default Workplace;
