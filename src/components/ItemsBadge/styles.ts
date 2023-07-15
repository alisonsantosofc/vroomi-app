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
`;

interface StyledPopoverProps {
  align?: 'left' | 'right' | 'center';
  hasTitle: boolean;
}

export const StyledPopover = styled.div<StyledPopoverProps>`
  display: none;
  margin-top: 1rem;
  position: absolute;
  background: ${({theme}) => theme.colors.containerBg};
  min-width: 256px;
  max-height: 256px;
  border-radius: 0.25rem;
  box-shadow: ${({theme}) => theme.effects.shadowAround};
  padding: 1rem;
  ${({hasTitle}) => !hasTitle && 'padding-top: 1.5rem;'}
  ${({align}) => align === 'left' 
    ? 'left: 0;'
    : align === 'right'
    ? 'right: 0;'
    : align === 'center'
    ? 'right: -235%;'
    : 'right: 0;'
  }

  &.show {
    display: block;
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
    justify-content: ${({align}) => align === 'left' 
      ? 'flex-start;'
      : align === 'right'
      ? 'flex-end;'
      : align === 'center'
      ? 'center;'
      : 'flex-end;'
    };

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
    top: -580%;
    right: -250%;

    .arrow-container {
      top: 100%;
      bottom: 0;
      justify-content: center;

      .arrow {
        border-bottom: 8px solid #ffffff00;
        border-top: 8px solid ${({theme}) => theme.colors.containerBg};
      }
    }
  }
`;