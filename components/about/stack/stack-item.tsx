import { StackProps } from '@/components/about/stack';

const StackItem = ({ category, items }: StackProps) => {
  return (
    <div>
      <h2 className='mb-1'>{category}</h2>
      <div className='flex gap-x-5 gap-y-2 flex-wrap'>
        {items.map((item) => (
          <p
            key={item}
            className='text-secondary cursor-default transition-colors lg:hover:text-primary'
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StackItem;
