import ConnectLinks from '../links/ConnectLinks';
import Section from '../shared/Section';
import Background from './Background';
import Certificates from './Certificates';
import Education from './Education';
import Experience from './Experience';
import Stack from './Stack';

const About = () => {
  return (
    <div className="pt-10 lg:pt-20">
      <h1 className="mb-10 lg:mb-20 animate-in">About me</h1>
      <div
        className="animate-in flex flex-col gap-10 lg:gap-20 pb-10"
        style={{ '--index': 1 } as React.CSSProperties}
      >
        <Background />
        <Experience />
        <Stack />
        <Certificates />
        <Education />
        <Section key="connect" heading="Connect">
          <ConnectLinks filled={false} />
        </Section>
      </div>
    </div>
  );
};

export default About;
