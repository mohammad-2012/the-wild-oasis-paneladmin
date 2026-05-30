import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
  HiOutlineXMark,
} from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";
import { useEffect } from "react";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ $isDarkMode }) =>
    $isDarkMode ? "rgba(0, 0, 0, 0.95)" : "rgba(255, 255, 255, 0.98)"};
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  flex-direction: column;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 2rem;
  background: none;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
  z-index: 2001;

  & svg {
    width: 2.8rem;
    height: 2.8rem;
    color: var(--color-grey-600);
  }

  &:hover svg {
    color: var(--color-brand-600);
  }
`;

const NavWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin: 0;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.8rem 1.6rem;
    transition: all 0.3s;
    border-radius: var(--border-radius-md);
    width: 100%;
    min-width: 20rem;
    justify-content: center;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-600);
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MobileMenu({ isOpen, onClose }) {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <Overlay $isOpen={isOpen} $isDarkMode={isDarkMode}>
      <CloseButton onClick={onClose}>
        <HiOutlineXMark />
      </CloseButton>
      <NavWrapper>
        <nav style={{ width: "100%" }}>
          <NavList>
            <li>
              <StyledNavLink to="/dashboard" onClick={handleLinkClick}>
                <HiOutlineHome />
                <span>Home</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/bookings" onClick={handleLinkClick}>
                <HiOutlineCalendarDays />
                <span>Bookings</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/cabins" onClick={handleLinkClick}>
                <HiOutlineHomeModern />
                <span>Cabins</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/users" onClick={handleLinkClick}>
                <HiOutlineUsers />
                <span>Users</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/settings" onClick={handleLinkClick}>
                <HiOutlineCog6Tooth />
                <span>Settings</span>
              </StyledNavLink>
            </li>
          </NavList>
        </nav>
      </NavWrapper>
    </Overlay>
  );
}

export default MobileMenu;
