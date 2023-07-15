import Section from '@/components/shared/section';
import Workplaces from '@/components/about/experience/workplaces';
import jobsTrackrLogo from '@/public/work/jobstrackr.jpg';
import triforkLogo from '@/public/work/trifork.png';
import { getYearsFrom } from '@/utils/date';
import { StaticImageData } from 'next/image';

export type WorkplaceProps = {
  title: string;
  company: string;
  imageSrc: string | StaticImageData;
  time: string;
  link: string;
  description: string;
};

const workplaces: WorkplaceProps[] = [
  {
    title: 'Creator & Front-end Developer',
    company: 'JobsTrackr',
    time: '07/2023 - present',
    imageSrc: jobsTrackrLogo,
    link: 'https://jobstrackr.app/',
    description:
      'Actively working on JobsTrackr in my spare time. JobsTrackr allows users to effortlessly manage and keep track of their active applications in one convenient dashboard.',
  },
  {
    title: 'Front-end Developer',
    company: 'Trifork',
    time: '04/2021 - present',
    imageSrc: triforkLogo,
    link: 'https://trifork.com',
    description:
      'Developing modern web applications using React, Next.js, TypeScript, GraphQL.',
  },
];

const Experience = () => {
  return (
    <Section key="experience" heading="Experience">
      <div className="flex flex-col w-full">
        <p>
          {getYearsFrom(2021)}+ years of professional development experience.
        </p>
        <Workplaces workplaces={workplaces} />
      </div>
    </Section>
  );
};

export default Experience;
