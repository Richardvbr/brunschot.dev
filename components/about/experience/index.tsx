import Section from '@/components/shared/section';
import Workplaces from '@/components/about/experience/workplaces';
import jobsTrackrLogo from '@/public/work/jobstrackr.jpg';
import triforkLogo from '@/public/work/trifork.png';
import { getYearsFrom } from '@/utils/date';

const workplaces = [
  {
    title: 'Creator & Front-end Developer',
    company: 'JobsTrackr',
    time: '07/2023 - present',
    imageSrc: jobsTrackrLogo,
    link: 'https://jobstrackr.app/',
  },
  {
    title: 'Front-end Developer',
    company: 'Trifork',
    time: '04/2021 - present',
    imageSrc: triforkLogo,
    link: 'https://trifork.com',
  },
];

const Experience = () => {
  return (
    <Section key='experience' heading='Experience'>
      <div className='flex flex-col gap-5 w-full'>
        <p>
          {getYearsFrom(2021)}+ years of professional development experience.
        </p>
        <Workplaces workplaces={workplaces} />
      </div>
    </Section>
  );
};

export default Experience;
