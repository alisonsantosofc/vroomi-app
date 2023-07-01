import { MutatingDots } from 'react-loader-spinner';

import { Container } from './styles';

interface LoaderProps {
  isActive: boolean;
}

export function Loader({ isActive }: LoaderProps) {
  return (
    <Container className="loader-content">
      <MutatingDots
        height="100"
        width="100"
        color="#fa4e3f"
        secondaryColor="#fa4e3f"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        visible={isActive}
      />
    </Container>
  );
}
