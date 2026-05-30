import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-grey-100);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;

    & svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.4rem;

    & svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  }
`;

export default ButtonIcon;
