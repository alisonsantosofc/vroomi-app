import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Home } from '../views/Home';
import { About } from '@/views/About';
import { Fleet } from '@/views/Fleet';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vroomi - Home</title>
      </Head>
      
      <Home />
      <About />
      <Fleet />
    </>
  );
}

// Function executed in node layer of next js
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 * 30, // revalidate every 30 days
  };
};
