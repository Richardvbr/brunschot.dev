// import jobsTrackrLogo from '@/public/images/jobstrackr.jpg';
import triforkLogo from '@/public/images/trifork.png';
import { getYearsFrom } from '@/utils/date';
import Section from '@/components/shared/Section';
import Workplace from './Workplace';
import { WorkplaceProps } from '@/types';

const workplaces: WorkplaceProps[] = [
  // {
  //   title: 'Creator & Front-end Developer',
  //   company: 'JobsTrackr',
  //   time: '07/2023 - present',
  //   imageSrc: jobsTrackrLogo,
  //   description:
  //     'Actively working on JobsTrackr in my spare time. JobsTrackr allows users to effortlessly manage and keep track of their active job applications in one convenient dashboard.',
  // },
  {
    title: 'Front-end Developer',
    company: 'Trifork',
    time: '04/2021 - present',
    location: 'Eindhoven, NL',
    imageSrc: triforkLogo,
    description:
      'Developing modern web applications using React, Next.js, TypeScript, and GraphQL.',
  },
];

const Experience = () => {
  return (
    <Section key="experience" heading="Experience">
      <div className="flex w-full flex-col">
        <p>
          {getYearsFrom(2021)}+ years of professional development experience.
        </p>
        <ul className="animated-list mt-6 flex flex-col gap-10">
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
      </div>
    </Section>
  );
};

export default Experience;
