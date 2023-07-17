import styled from "styled-components";

export const StyledAppLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.8rem;
  padding: 0.5rem 1rem;
  font-weight: 500;
  font-size: 0.9rem;
  border-radius: 0.25rem;
  box-shadow: ${({theme}) => theme.effects.shadowAround};
  background: ${({theme}) => theme.colors.containerBg};
  transition: .3s;
  
  svg {
    transition: .3s;
  }

  &:hover {
    background: ${({theme}) => theme.effects.hoverLight(theme.colors.containerBg)};

    svg {
      transform: translateX(0.25rem);
    }
  }
`;