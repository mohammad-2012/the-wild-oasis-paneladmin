import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    gap: 0.8rem;
    flex-direction: column;
    align-items: stretch;

    & > * {
      width: 100%;
    }
  }
`;

export default TableOperations;
