import Link from 'next/link';
import Image from 'next/image';

import avatar from '@/public/images/richard.jpg';
import { getYearsFrom } from '@/utils/date';
import {
  BsArrowUpRight,
  ImStack,
  CiLocationOn,
  BsBriefcase,
} from '@/components/shared/Icons';

const Home = () => {
  return (
    <div className="pt-10 lg:pt-20">
      <h1 className="animate-in">Richard van Brunschot</h1>
      <p
        className="animate-in text-secondary"
        style={{ '--index': 1 } as React.CSSProperties}
      >
        Front-end Engineer
      </p>
      <div
        className="mt-8 flex h-[100] w-[100] animate-in items-center gap-8"
        style={{ '--index': 1 } as React.CSSProperties}
      >
        <div className="relative h-[100px] w-[100px] shrink-0">
          <Image
            src={avatar}
            layout="fill"
            alt="avatar"
            className="rounded-full bg-secondary"
          />
        </div>
        <ul className="flex flex-col gap-1.5 text-secondary">
          <li className="flex items-center gap-4">
            <div className="shrink-0">
              <BsBriefcase />
            </div>
            <p>Front-end Engineer @ Trifork (Eindhoven, NL)</p>
          </li>
          <li className="flex items-center gap-4">
            <div className="shrink-0">
              <ImStack />
            </div>
            <p>React, Next.js, TypeScript, GraphQL</p>
          </li>
          <li className="flex items-center gap-4">
            <div className="shrink-0">
              <CiLocationOn />
            </div>
            <p>Lommel, Belgium</p>
          </li>
        </ul>
      </div>
      <p
        className="mt-8 max-w-lg animate-in"
        style={{ '--index': 2 } as React.CSSProperties}
      >
        I&apos;m a front-end developer with currently{' '}
        {getYearsFrom(new Date('2021-04-01'))}+ years of professional experience
        in developing and delivering high-quality, responsive, and user-friendly
        web applications using modern technologies.
      </p>
      <ul
        className="mt-8 flex animate-in gap-4 text-secondary md:gap-6"
        style={{ '--index': 2 } as React.CSSProperties}
      >
        <li className="transition-opacity">
          <Link
            href="/about"
            className="flex items-center gap-2 no-underline transition-colors  hover:text-white"
          >
            <BsArrowUpRight />
            <span>See more</span>
          </Link>
        </li>
        <li className="transition-opacity">
          <Link
            href="/links"
            className="flex items-center gap-2 no-underline transition-colors hover:text-white"
          >
            <BsArrowUpRight />
            <span>Connect</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
