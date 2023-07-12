import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/shared/section';
import avatar from '@/public//richard.jpg';
import {
  BsArrowUpRight,
  ImStack,
  CiLocationOn,
  BsBriefcase,
} from '@/components/shared/icons';

const Home = () => {
  return (
    <Section className='pt-10 lg:pt-20'>
      <h1 className='animate-in'>Richard van Brunschot</h1>
      <p
        className='text-secondary animate-in'
        style={{ '--index': 1 } as React.CSSProperties}
      >
        Front-end Developer
      </p>
      <div
        className='mt-8 animate-in flex gap-8 items-center'
        style={{ '--index': 1 } as React.CSSProperties}
      >
        <Image
          src={avatar}
          width={95}
          height={95}
          alt='avatar'
          className='rounded-full bg-secondary'
        />
        <ul className='text-secondary flex flex-col gap-1.5'>
          <li className='flex gap-4 items-center'>
            <BsBriefcase />
            Working at Trifork, Eindhoven
          </li>
          <li className='flex gap-4 items-center'>
            <ImStack />
            React, Next.js, TypeScript, GraphQL
          </li>
          <li className='flex gap-4 items-center'>
            <CiLocationOn />
            Lommel, Belgium
          </li>
        </ul>
      </div>
      <p
        className='mt-8 max-w-lg animate-in'
        style={{ '--index': 2 } as React.CSSProperties}
      >
        I'm a front-end developer with 2 years of professional experience in
        developing and delivering high-quality, responsive, and user-friendly
        web applications using modern technologies. such as React, Next.js,
        TypeScript, and GraphQL.
      </p>
      <ul
        className='flex flex-col mt-8 md:flex-row gap-2 md:gap-6 text-secondary animated-list animate-in'
        style={{ '--index': 2 } as React.CSSProperties}
      >
        <li className='transition-opacity'>
          <Link
            href='mailto:richardvanbrunschot@gmail.com'
            className='flex gap-2 items-center no-underline'
          >
            <BsArrowUpRight />
            <span>Email me</span>
          </Link>
        </li>
        <li className='transition-opacity'>
          <Link href='/links' className='flex gap-2 items-center no-underline'>
            <BsArrowUpRight />
            <span>Connect with me</span>
          </Link>
        </li>
      </ul>
    </Section>
  );
};

export default Home;
