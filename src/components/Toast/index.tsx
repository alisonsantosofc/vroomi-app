import { Smiley, SmileyWink, SmileyNervous, SmileySad } from '@phosphor-icons/react';

import { Container } from './styles';

interface ToastProps {
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export function Toast({ title, message, type }: ToastProps) {
  function getIcon() {
    switch (type) {
      case 'info':
        return <Smiley className="smiley-icon" />;
      case 'success':
        return <SmileyWink className="smiley-icon" />;
      case 'warning':
        return <SmileyNervous className="smiley-icon" />;
      case 'error':
        return <SmileySad className="smiley-icon" />;
      default:
        return <Smiley className="smiley-icon" />;
    }
  }

  return (
    <Container type={type}>
      {getIcon()}

      <div className="message-content">
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
    </Container>
  );
}
