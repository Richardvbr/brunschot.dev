import Background from './Background';
import Experience from './Experience';
import Stack from './Stack';
import Certificates from './Certificates';
import Education from './Education';
import Section from '@/components/shared/Section';
import ConnectLinks from '@/components/links/ConnectLinks';

const About = () => {
  return (
    <div className="pt-10 lg:pt-20">
      <h1 className="mb-10 animate-in lg:mb-20">About me</h1>
      <div
        className="flex animate-in flex-col gap-10 pb-10 lg:gap-20"
        style={{ '--index': 1 } as React.CSSProperties}
      >
        <Background />
        <Experience />
        <Stack />
        <Certificates />
        <Education />
        <Section key="connect" heading="Connect">
          <ConnectLinks filled={false} center={false} />
        </Section>
      </div>
    </div>
  );
};

export default About;
