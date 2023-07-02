import { MutatingDots } from 'react-loader-spinner';

import { StyledLoader } from './styles';
import { useDarkMode } from '@/hooks/useDarkMode';
import { darkTheme, lightTheme } from '@/styles/themes';

interface LoaderProps {
  isActive: boolean;
}

export function Loader({ isActive }: LoaderProps) {
  const { darkMode } = useDarkMode();

  return (
    <StyledLoader>
      <MutatingDots
        height="100"
        width="100"
        color={!darkMode ? lightTheme.colors.main500 : darkTheme.colors.main500}
        secondaryColor={!darkMode ? lightTheme.colors.main500 : darkTheme.colors.main500}
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        visible={isActive}
      />
    </StyledLoader>
  );
}
