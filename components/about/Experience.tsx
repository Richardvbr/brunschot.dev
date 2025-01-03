import triforkLogo from '@/public/images/trifork.png';
import Section from '@/components/shared/Section';
import Workplace from './Workplace';
import type { WorkplaceProps } from '@/types';

const workplaces: WorkplaceProps[] = [
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
        <ul className="animated-list flex flex-col gap-10">
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
