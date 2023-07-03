import styled from "styled-components";

interface TextareaContainerProps {
  isActive: boolean; 
  label?: string | null
}

export const TextareaContainer = styled.div<TextareaContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  border: 2px solid transparent;
  border-radius: 0.25rem;
  background: ${props => props.theme.colors.containerBg};
  transition: border-color color ease-in .3s;
  box-shadow: ${props => props.theme.effects.shadowAround};

  ${(props) => props.isActive && `border-color: ${props.theme.colors.main500};`};
  ${(props) => props.label && `margin-top: 2.5rem;`};

  label {
    position: absolute;
    top: -2rem;
    left: -0.5rem;
    padding: 0.1rem 0.5rem;
    font-size: 0.9rem;
  }

  textarea {
    background: ${props => props.theme.colors.containerBg};
    font-size: 1rem;
    width: 100%;
    color: ${props => props.theme.colors.text};
    border: none;
    resize: none;
    overflow: hidden;

    &::placeholder {
      color: ${props => props.theme.colors.label};
    }

    &:focus-visible {
      outline: none;
    }
  }

  svg {
    font-size: 1.4rem;
    margin-right: 1rem;
    transition: all ease-in .3s;
    color: ${(props) => 
      props.isActive 
        ? props.theme.colors.main500 
        : props.theme.colors.label
    };
  }
`;
