import type { AppProps } from 'next/app';

import { MyApp } from './MyApp';

import { DarkModeProvider } from '../hooks/useDarkMode';
import { SessionUserProvider } from '../hooks/useSessionUser';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionUserProvider>
        <DarkModeProvider>
          <MyApp>
            <Component {...pageProps} />
          </MyApp>
        </DarkModeProvider>
      </SessionUserProvider>
    </>
  );
}
