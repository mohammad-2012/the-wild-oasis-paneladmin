import styled from "styled-components";

const StyledEmpty = styled.p`
  text-align: center;
  color: var(--color-grey-500);
  font-size: 1.6rem;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 1.5rem;
  }
`;

function Empty({ resourceName }) {
  return <StyledEmpty>No {resourceName} could be found.</StyledEmpty>;
}

export default Empty;
