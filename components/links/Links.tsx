import Image from 'next/image';
import avatar from '@/public//richard.jpg';
import ConnectLinks from './ConnectLinks';

const Links = () => {
  return (
    <div className="pt-10 lg:pt-20">
      <div className="flex flex-col items-center">
        <Image
          src={avatar}
          width={95}
          height={95}
          alt="avatar"
          className="animate-in rounded-full bg-secondary"
        />
        <h1
          className="mt-4 animate-in"
          style={{ '--index': 1 } as React.CSSProperties}
        >
          Richard van Brunschot
        </h1>
        <p
          className="mt-2 max-w-sm animate-in text-center text-secondary"
          style={{ '--index': 1 } as React.CSSProperties}
        >
          Front-end developer who loves building cool things with code. You can
          connect with me using the links below.
        </p>
        <div
          className="w-full animate-in"
          style={{ '--index': 2 } as React.CSSProperties}
        >
          <ConnectLinks filled={true} center={true} className="mt-8 lg:mt-12" />
        </div>
      </div>
    </div>
  );
};

export default Links;
