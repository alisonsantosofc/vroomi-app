import styled from "styled-components";

export const StyledRoot = styled.div`
  position: relative;
`;

export const StyledTrigger = styled.div`
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

interface StyledPopoverProps {
  hasTitle: boolean;
}

export const StyledPopover = styled.div<StyledPopoverProps>`
  display: none;
  margin-top: 1rem;
  position: absolute;
  right: 0;
  background: ${({theme}) => theme.colors.containerBg};
  width: 276px;
  height: 256px;
  border-radius: 0.25rem;
  box-shadow: ${({theme}) => theme.effects.shadowAround};
  padding: 1rem;
  ${({hasTitle}) => !hasTitle && 'padding-top: 1.5rem;'}

  &.show {
    display: block;
  }

  .popover-content {
    max-height: calc(100% - 2rem);
    overflow-y: scroll;
    padding: 0.25rem 0;
  }

  .btn-close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    font-size: 0.9rem;
    cursor: pointer;
  }

  h5 {
    margin-bottom: 0.5rem;
  }

  .arrow-container {
    width: 100%;
    position: absolute;
    top: -0.5rem;
    left: 0;
    display: flex;
    justify-content: flex-end;

    .arrow {
      width: 0;
      height: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid ${({theme}) => theme.colors.containerBg};
      margin: 0 1rem;
    }
  }

  /*=== Breakpoints ===*/
  /* For medium devices */
  @media screen and (max-width: 768px) {
    top: -920%;
    right: -0.4rem;

    .arrow-container {
      top: 100%;
      bottom: 0;
      justify-content: flex-end;

      .arrow {
        border-bottom: 8px solid transparent;
        border-top: 8px solid ${({theme}) => theme.colors.containerBg};
      }
    }
  }

  @media screen and (max-width: 576px) {
    width: calc(100vw - 200%);
    right: -165%;

    .arrow-container {
      .arrow {
        margin: 0 4.25rem;
      }
    }
  }
`;