import { NextSeo } from 'next-seo';
import Home from '@/components/home/Home';

export default function HomePage() {
  const seoTitle = 'Richard van Brunschot | Front-end Developer';
  const seoDescription = 'Richard van Brunschot, front-end developer.';

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          url: `https://brunschot.dev/`,
          site_name: seoTitle,
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Home />
    </>
  );
}
