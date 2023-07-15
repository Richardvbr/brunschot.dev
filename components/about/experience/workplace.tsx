import Image from 'next/image';
import { WorkplaceProps } from '@/components/about/experience';

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
        <p className="text-secondary ml-auto text-sm shrink-0">{time}</p>
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
