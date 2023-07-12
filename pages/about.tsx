import { NextSeo } from 'next-seo';
import About from '@/components/about';

export default function AboutPage() {
  const seoTitle = 'About | Richard van Brunschot';
  const seoDescription = 'Richard van Brunschot, front-end developer.';

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          url: `https://brunschot.dev/about/`,
          site_name: 'Richard van Brunschot',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <About />
    </>
  );
}
