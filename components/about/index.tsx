import Background from './background';
import Experience from './experience';
import Stack from './stack';
import Certificates from './certificates';
import Education from './education';
import ConnectLinks from '../links/connect-links';
import Section from '../shared/section';

const About = () => {
  return (
    <div className='pt-10 lg:pt-20'>
      <h1 className='mb-10 lg:mb-20 animate-in'>About me</h1>
      <div
        className='animate-in flex flex-col gap-10 lg:gap-20 pb-10'
        style={{ '--index': 1 } as React.CSSProperties}
      >
        <Background />
        <Experience />
        <Stack />
        <Certificates />
        <Education />
        <Section key='connect' heading='Connect'>
          <ConnectLinks filled={false} />
        </Section>
      </div>
    </div>
  );
};

export default About;
