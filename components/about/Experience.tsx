import { StaticImageData } from 'next/image';
import { getYearsFrom } from '@/utils/date';
import Section from '@/components/shared/Section';
import Workplaces from '@/components/about/Workplaces';
import jobsTrackrLogo from '@/public/work/jobstrackr.jpg';
import triforkLogo from '@/public/work/trifork.png';

export type WorkplaceProps = {
  title: string;
  company: string;
  imageSrc: string | StaticImageData;
  time: string;
  location?: string;
  description: string;
};

const workplaces: WorkplaceProps[] = [
  {
    title: 'Creator & Front-end Developer',
    company: 'JobsTrackr',
    time: '07/2023 - present',
    imageSrc: jobsTrackrLogo,
    description:
      'Actively working on JobsTrackr in my spare time. JobsTrackr allows users to effortlessly manage and keep track of their active applications in one convenient dashboard.',
  },
  {
    title: 'Front-end Developer',
    company: 'Trifork',
    time: '04/2021 - present',
    location: 'Eindhoven, NL',
    imageSrc: triforkLogo,
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
