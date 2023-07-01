import { GetStaticProps } from 'next';
import Head from 'next/head';

import { Dashboard } from '../views/Dashboard';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vroomi - Dashboard</title>
      </Head>
      <Dashboard />
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
