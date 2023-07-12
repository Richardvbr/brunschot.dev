import { NextSeo } from 'next-seo';
import Home from '@/components/home';

export default function HomePage() {
  const seoTitle = 'Richard van Brunschot';
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
          site_name: 'Richard van Brunschot',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Home />
    </>
  );
}
