import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import { HiOutlineBars3 } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    gap: 1.6rem;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.5rem;
    gap: 1.2rem;
  }
`;

const MenuButton = styled(ButtonIcon)`
  display: none;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

const AvatarWrapper = styled.div`
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

function Header({ onMenuClick }) {
  return (
    <StyledHeader>
      <MenuButton onClick={onMenuClick}>
        <HiOutlineBars3 />
      </MenuButton>
      <AvatarWrapper>
        <UserAvatar />
      </AvatarWrapper>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
