import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.3rem;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;

    @media (max-width: 480px) {
      font-size: 1.2rem;
      padding: 0.6rem 1rem;
    }
  `,
  medium: css`
    font-size: 1.5rem;
    padding: 1.2rem 1.8rem;
    font-weight: 500;

    @media (max-width: 768px) {
      padding: 1rem 1.6rem;
    }

    @media (max-width: 480px) {
      font-size: 1.4rem;
      padding: 1rem 1.6rem;
    }
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;

    @media (max-width: 768px) {
      padding: 1rem 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.5rem;
      padding: 1rem 1.8rem;
    }
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}

  @media (max-width: 480px) {
    width: 100%;
  }
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
