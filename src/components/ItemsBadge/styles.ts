import styled from "styled-components";

export const StyledItemsBadge = styled.a`
  position: relative;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    font-size: 2.5rem;
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
    width: 1.25rem;
    height: 1.25rem;
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
    .badge {
      font-size: 0.6rem;
      width: 1rem;
      height: 1rem;
      top: -0.3rem;
      right: -0.3rem;
    }
  }
`;
