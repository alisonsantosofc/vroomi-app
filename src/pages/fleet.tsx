import Head from 'next/head';

import { UserFleet } from '@/views/UserFleet';

export default function FleetPage() {
  return (
    <>
      <Head>
        <title>Vroomi | Sua frota</title>
      </Head>
      <UserFleet />
    </>
  );
}
