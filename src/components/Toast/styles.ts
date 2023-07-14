import styled from 'styled-components';

function getIconColor(type: string, colors: any): string {
  switch (type) {
    case 'info':
      return colors.blue500;
    case 'success':
      return colors.green500;
    case 'warning':
      return colors.orange500;
    case 'error':
      return colors.red500;
    default:
      return colors.gray300;
  }
}

export const Container = styled.div<{type: string}>`
  display: flex;
  align-items: center;

  .smiley-icon {
    font-size: 6rem;
    margin: 0 0.5rem;
    color: ${({type, theme}) => getIconColor(type, theme.colors)};
  }

  .message-content {
    h4 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }
  }
`;
