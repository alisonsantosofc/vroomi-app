import { Montserrat } from 'next/font/google';

import { DarkModeProvider } from '@/hooks/useDarkMode';

import { MyApp } from './app';
import { AppProps } from 'next/app';
import { RentalsProvider } from '@/hooks/useRentals';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Vroomi',
  description: 'Alugue carros de uma forma prática e rápida.',
}

interface RootProps extends AppProps{
  children: React.ReactNode;
}

export default function RootLayout({
  children,
  pageProps
}: RootProps) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <DarkModeProvider>
          <RentalsProvider>
            <MyApp {...pageProps}>
              {children}
            </MyApp>
          </RentalsProvider>
        </DarkModeProvider>
      </body>
    </html>
  );
}
