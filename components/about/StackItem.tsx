import { StackProps } from '@/components/about/Stack';

const StackItem = ({ category, items }: StackProps) => {
  return (
    <div>
      <h3 className="mb-2 font-medium">{category}</h3>
      <div className="flex flex-wrap gap-x-3 gap-y-2">
        {items.map((item) => (
          <p
            key={item}
            className="cursor-default text-secondary transition-colors md:rounded-md md:bg-secondary/10 md:px-2 md:py-1.5 md:hover:text-primary"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StackItem;
