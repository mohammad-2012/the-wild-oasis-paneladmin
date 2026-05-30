import styled from "styled-components";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

const AccountContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

function Account() {
  return (
    <AccountContainer>
      <Heading as="h1">Update your account</Heading>

      <Section>
        <Row>
          <Heading as="h3">Update user data</Heading>
          <UpdateUserDataForm />
        </Row>
      </Section>

      <Section>
        <Row>
          <Heading as="h3">Update password</Heading>
          <UpdatePasswordForm />
        </Row>
      </Section>
    </AccountContainer>
  );
}

export default Account;
