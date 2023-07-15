import Link from 'next/link';
import Image from 'next/image';
import avatar from '@/public//richard.jpg';
import {
  BsArrowUpRight,
  ImStack,
  CiLocationOn,
  BsBriefcase,
} from '@/components/shared/Icons';
import { getYearsFrom } from '@/utils/date';

const Home = () => {
  return (
    <div className="pt-10 lg:pt-20">
      <h1 className="animate-in">Richard van Brunschot</h1>
      <p
        className="text-secondary animate-in"
        style={{ '--index': 1 } as React.CSSProperties}
      >
        Front-end Developer
      </p>
      <div
        className="mt-8 animate-in flex gap-8 items-center"
        style={{ '--index': 1 } as React.CSSProperties}
      >
        <Image
          src={avatar}
          width={95}
          height={95}
          alt="avatar"
          className="rounded-full bg-secondary"
        />
        <ul className="text-secondary flex flex-col gap-1.5">
          <li className="flex gap-4 items-center">
            <div className="shrink-0">
              <BsBriefcase />
            </div>
            Working at Trifork, Eindhoven
          </li>
          <li className="flex gap-4 items-center">
            <div className="shrink-0">
              <ImStack />
            </div>
            React, Next.js, TypeScript, GraphQL
          </li>
          <li className="flex gap-4 items-center">
            <div className="shrink-0">
              <CiLocationOn />
            </div>
            Lommel, Belgium
          </li>
        </ul>
      </div>
      <p
        className="mt-8 max-w-lg animate-in"
        style={{ '--index': 2 } as React.CSSProperties}
      >
        I&apos;m a front-end developer with {getYearsFrom(2021)}+ years of
        professional experience in developing and delivering high-quality,
        responsive, and user-friendly web applications using modern
        technologies.
      </p>
      <ul
        className="flex flex-col mt-8 md:flex-row gap-2 md:gap-6 text-secondary animated-list animate-in"
        style={{ '--index': 2 } as React.CSSProperties}
      >
        <li className="transition-opacity">
          <Link
            href="mailto:richardvanbrunschot@gmail.com"
            className="flex gap-2 items-center no-underline"
          >
            <BsArrowUpRight />
            <span>Email me</span>
          </Link>
        </li>
        <li className="transition-opacity">
          <Link href="/links" className="flex gap-2 items-center no-underline">
            <BsArrowUpRight />
            <span>Connect with me</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
