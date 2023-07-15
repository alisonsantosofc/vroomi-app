import type { AppProps } from 'next/app';

import { MyApp } from '../MyApp';

import { DarkModeProvider } from '../hooks/useDarkMode';
import { RentalsProvider } from '@/hooks/useRentals';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DarkModeProvider>
        <RentalsProvider>
        <MyApp>
          <Component {...pageProps} />
        </MyApp>
        </RentalsProvider>
      </DarkModeProvider>
    </>
  );
}
