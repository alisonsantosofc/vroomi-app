import { Container } from './styles';

export function Footer() {
  return (
    <Container className="container">
      <p>Copyright © {new Date().getFullYear()} Vroomi. Todos os direitos reservados.</p>
    </Container>
  );
}
