import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: white;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledNavLink = styled(NavLink)`
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

const CartIconContainer = styled(NavLink)`
  position: relative;
  color: white;
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;
`;

const CartCount = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 4px 8px;
  font-size: 12px;
`;

const Header = () => {
  const { getCartItemCount } = useContext(CartContext); 

  return (
    <HeaderContainer>
      <h1>My Shop</h1>
      <NavBar>
        <StyledNavLink to="/" end>Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/contact">Contact</StyledNavLink>
      </NavBar>
      <CartIconContainer to="/cart">
        <FaShoppingCart />
        {getCartItemCount() > 0 && <CartCount>{getCartItemCount()}</CartCount>} {/* Displays number of products */}
      </CartIconContainer>
    </HeaderContainer>
  );
};

export default Header;
