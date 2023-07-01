import { Smiley, SmileyWink, SmileyNervous, SmileySad } from 'phosphor-react';

import { Container } from './styles';

interface ToastProps {
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export function Toast({ title, message, type }: ToastProps) {
  function setIcon() {
    switch (type) {
      case 'info':
        return <Smiley color="#4da5e0" />;
        break;
      case 'success':
        return <SmileyWink color="#59ae54" />;
        break;
      case 'warning':
        return <SmileyNervous color="#e99a39" />;
        break;
      case 'error':
        return <SmileySad color="#e34747" />;
        break;
      default:
        return <Smiley color="#4da5e0" />;
        break;
    }
  }

  return (
    <Container>
      {setIcon()}

      <div className="message-content">
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
    </Container>
  );
}
