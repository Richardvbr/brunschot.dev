import Section from '@/components/shared/Section';
import StackItem from '@/components/about/StackItem';
import { StackProps } from '@/types';

const stack: StackProps[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'SCSS/CSS', 'HTML5'],
  },
  {
    category: 'Frameworks/libraries',
    items: ['React', 'Next.js', 'React Native', 'Gatsby', 'Astro', 'visx'],
  },
  {
    category: 'Other',
    items: [
      'GraphQL',
      'Tailwind CSS',
      'styled-components',
      'DatoCMS',
      'Yarn/npm',
      'Supabase',
      'Scrum',
    ],
  },
  {
    category: 'Tools',
    items: ['VS Code', 'Git', 'Azure DevOps', 'Postman', 'Figma'],
  },
];

const Stack = () => {
  return (
    <Section key="stack" heading="Stack">
      <ul className="flex flex-col gap-6">
        {stack.map(({ category, items }) => (
          <StackItem key={category} category={category} items={items} />
        ))}
      </ul>
    </Section>
  );
};

export default Stack;
