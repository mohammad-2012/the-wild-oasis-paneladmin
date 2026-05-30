import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;

  @media (max-width: 768px) {
    gap: 0.8rem;
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    padding: 0.8rem 0;
  }
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1.6rem;
  color: var(--color-grey-700);

  @media (max-width: 768px) {
    font-size: 1.8rem;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Error = styled.span`
  font-size: 1.3rem;
  color: var(--color-red-700);

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
