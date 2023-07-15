import cn from 'clsx';

type SectionProps = {
  heading: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ heading, className, children }: SectionProps) => {
  return (
    <section
      className={cn('flex flex-col gap-2 md:flex-row md:gap-9', className)}
    >
      <h2 className="shrink-0 text-lg font-semibold text-secondary md:w-28 lg:text-base lg:font-normal">
        {heading}
      </h2>
      {children}
    </section>
  );
};

export default Section;
