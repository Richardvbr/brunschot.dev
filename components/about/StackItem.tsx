import { StackProps } from '@/components/about/Stack';

const StackItem = ({ category, items }: StackProps) => {
  return (
    <div>
      <h2 className="mb-2">{category}</h2>
      <div className="flex gap-x-3 gap-y-2 flex-wrap">
        {items.map((item) => (
          <p
            key={item}
            className="text-secondary cursor-default transition-colors md:hover:text-primary md:bg-secondary/10 md:py-1.5 md:px-2 md:rounded-md"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StackItem;
