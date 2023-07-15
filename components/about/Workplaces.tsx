import Workplace from './Workplace';
import { WorkplaceProps } from '@/components/about/Experience';

const Workplaces = ({ workplaces }: { workplaces: WorkplaceProps[] }) => {
  return (
    <ul className="flex flex-col animated-list mt-6 gap-10">
      {workplaces.map(
        ({ title, company, imageSrc, time, location, description }) => (
          <Workplace
            key={title}
            title={title}
            company={company}
            imageSrc={imageSrc}
            time={time}
            location={location}
            description={description}
          />
        )
      )}
    </ul>
  );
};

export default Workplaces;
