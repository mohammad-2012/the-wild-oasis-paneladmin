import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 1rem 1.4rem;
  box-shadow: var(--shadow-sm);
  width: 100%;
  font-size: 1.5rem;

  &:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: 1px;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.2rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.2rem;
    font-size: 1.5rem;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Input;
