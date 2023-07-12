import cn from 'clsx';

type SectionProps = {
  heading: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ heading, className, children }: SectionProps) => {
  return (
    <section
      className={cn('flex flex-col md:flex-row gap-2 md:gap-9', className)}
    >
      <h2 className='text-secondary shrink-0 w-28'>{heading}</h2>
      {children}
    </section>
  );
};

export default Section;
