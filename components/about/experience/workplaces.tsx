import React from 'react';
import { StaticImageData } from 'next/image';
import Workplace from './workplace';

export type WorkplaceProps = {
  title: string;
  company: string;
  imageSrc: string | StaticImageData;
  time: string;
  link: string;
};

const Workplaces = ({ workplaces }: { workplaces: WorkplaceProps[] }) => {
  return (
    <ul className='flex flex-col gap-8 animated-list mt-4 lg:mt-6'>
      {workplaces.map(({ title, company, imageSrc, time, link }) => (
        <Workplace
          key={title}
          title={title}
          company={company}
          imageSrc={imageSrc}
          time={time}
          link={link}
        />
      ))}
    </ul>
  );
};

export default Workplaces;
