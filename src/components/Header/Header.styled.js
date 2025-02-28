import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 18px;

  &.active {
    font-weight: bold;
    border-bottom: 2px solid white;
  }

  &:hover {
    color: #ccc;
  }
`;

export const CartIconContainer = styled(NavLink)`
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
`;

export const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
`;