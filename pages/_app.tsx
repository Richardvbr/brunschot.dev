import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

import '@/styles/globals.css';
import Layout from '@/components/shared/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </>
  );
}
