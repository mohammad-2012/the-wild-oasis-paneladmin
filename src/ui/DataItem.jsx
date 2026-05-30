import styled from "styled-components";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 0.6rem 0;
  }
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    gap: 0.6rem;

    & svg {
      width: 1.6rem;
      height: 1.6rem;
    }
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

export default DataItem;
