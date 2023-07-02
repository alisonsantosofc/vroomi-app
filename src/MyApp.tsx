import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '@/lib/registry';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { useDarkMode } from './hooks/useDarkMode';

import { GlobalStyles } from './styles/global';
import { darkTheme, lightTheme } from "./styles/themes";

interface MyAppProps {
  children: ReactNode;
}

export function MyApp({children}: MyAppProps) {
  const { darkMode } = useDarkMode();

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StyledComponentsRegistry>
        <>
          <GlobalStyles />
          <ToastContainer
            autoClose={5000}
            className="react-toastfy-container"
            toastClassName="react-toastfy-content"
            icon={false}
            closeButton={false}
            position="top-center"
          />

          <Header />
          
          {children}

          <Footer />
        </>
      </StyledComponentsRegistry>
    </ThemeProvider>
  )
}
