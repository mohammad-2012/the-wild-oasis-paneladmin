import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;

  @media (max-width: 768px) {
    padding: 2.4rem;
  }

  @media (max-width: 480px) {
    padding: 1.6rem;
  }
`;

const Box = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }

  @media (max-width: 768px) {
    padding: 3.2rem;
    flex: 0 1 90%;

    & h1 {
      margin-bottom: 2.4rem;
    }
  }

  @media (max-width: 480px) {
    padding: 2rem;

    & h1 {
      margin-bottom: 1.8rem;
    }
  }
`;

const BackButton = styled(Button)`
  @media (max-width: 480px) {
    width: 100%;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <BackButton onClick={moveBack} size="large">
          &larr; Go back
        </BackButton>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
