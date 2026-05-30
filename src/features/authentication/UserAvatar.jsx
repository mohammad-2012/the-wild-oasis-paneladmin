import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);

  @media (max-width: 768px) {
    gap: 0.8rem;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
    font-size: 1.1rem;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);

  @media (max-width: 768px) {
    width: 3rem;
  }

  @media (max-width: 480px) {
    width: 2.8rem;
  }
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  // const fullName = "mohammad";
  // const avatar = "default-user.jpg";

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "/default-user.jpg"}
        alt={`Avatar of ${fullName}`}
      />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
