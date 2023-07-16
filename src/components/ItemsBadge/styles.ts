import styled from "styled-components";

export const StyledItemsBadge = styled.a`
  position: relative;
  background-color: ${({theme}) => theme.colors.containerBg};
  padding: 0.5rem;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: ${({theme}) => theme.effects.shadowAround};
  cursor: pointer;

  svg {
    font-size: 2rem;
  }

  .badge {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    border-radius: 100%;
    background: ${({theme}) => theme.colors.red500};
    width: 1.45rem;
    height: 1.45rem;
    font-size: 0.75rem;
    color: ${({theme}) => theme.colors.white};
    opacity: 0;
    transition: .3s;

    &.show {
      opacity: 1;
    }
  }

  /*=== Breakpoints ===*/
  /* For medium devices */
  @media screen and (max-width: 768px) {
    width: 26px;
    height: 26px;
    padding: 0.3rem;

    .badge {
      font-size: 0.6rem;
      width: 1rem;
      height: 1rem;
      top: -0.3rem;
      right: -0.3rem;
    }
  }
`;
