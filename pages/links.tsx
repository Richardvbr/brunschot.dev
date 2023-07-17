import { NextSeo } from 'next-seo';
import Links from '@/components/links';

export default function LinksPage() {
  const seoTitle = 'Links | Richard van Brunschot - Front-end Developer';
  const seoDescription = 'Connect with me using the links on this page.';

  return (
    <>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        openGraph={{
          title: seoTitle,
          description: seoDescription,
          url: `https://brunschot.dev/links/`,
          site_name: 'Richard van Brunschot',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Links />
    </>
  );
}
