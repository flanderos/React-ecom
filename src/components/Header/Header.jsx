import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importer handlekurv-ikonet fra react-icons
import { CartContext } from '../../contexts/CartContext';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 10px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavBar = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const CartIconContainer = styled(Link)`
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
  const { cartItems } = useContext(CartContext);

  return (
    <HeaderContainer>
      <h1>My Shop</h1>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </NavBar>
      <CartIconContainer to="/cart">
        <FaShoppingCart />
        {cartItems.length > 0 && <CartCount>{cartItems.length}</CartCount>}
      </CartIconContainer>
    </HeaderContainer>
  );
};

export default Header;