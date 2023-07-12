import React from 'react';
import Workplace from './workplace';
import { WorkplaceProps } from '@/components/about/experience';

const Workplaces = ({ workplaces }: { workplaces: WorkplaceProps[] }) => {
  return (
    <ul className='flex flex-col gap-8 animated-list mt-4 lg:mt-6'>
      {workplaces.map(
        ({ title, company, imageSrc, time, link, description }) => (
          <Workplace
            key={title}
            title={title}
            company={company}
            imageSrc={imageSrc}
            time={time}
            link={link}
            description={description}
          />
        )
      )}
    </ul>
  );
};

export default Workplaces;
