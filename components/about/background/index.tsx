import Section from '@/components/shared/section';

const Background = () => {
  return (
    <Section key='background' heading='Background'>
      <div className='flex flex-col gap-5'>
        <p>
          Hi, I&apos;m Richard van Brunschot. Originally from Eindhoven, NL, but
          in 2021 my girlfriend and I moved to Lommel, BE. I&apos;m currently
          working as a front-end developer at{' '}
          <a className='underline' href='https://trifork.com' target='__blank'>
            Trifork
          </a>
          .
        </p>
        <p>
          While studying Computer Animation/VFX at the Netherlands Film Academy,
          I specialized in creating high-end 3D models for games and virtual
          reality. However, during my graduation year, I realized that I wanted
          to focus more on coding and software development. This led me to
          pursue front-end development, which turned out to be the perfect fit
          for me.
        </p>
      </div>
    </Section>
  );
};

export default Background;
