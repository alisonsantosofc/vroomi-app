"use client";

import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StyledComponentsRegistry from '@/lib/registry';

import { useDarkMode } from '@/hooks/useDarkMode';

import { darkTheme, lightTheme } from '../styles/themes';
import { GlobalStyles } from '../styles/global';
import { AppContainer } from './AppContainer';

interface MyAppProps {
  children: React.ReactNode;
}

export function MyApp({ children }: MyAppProps) {
  const { darkMode } = useDarkMode();

  // useEffect(() => {
  //   // gest local data
  //   // Get rentals
  //   const rentals = JSON.parse(
  //     localStorage.getItem('rentals') as string
  //   );
  //   if (rentals) {
  //     dispatch(setRentals(rentals));
  //   }
  // }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <StyledComponentsRegistry>
        <GlobalStyles />

        <AppContainer>
          {children}
        </AppContainer>

        <ToastContainer
          autoClose={5000}
          className="react-toastfy-container"
          toastClassName="react-toastfy-content"
          icon={false}
          position="top-center"
          />
      </StyledComponentsRegistry>
    </ThemeProvider>
  )
}