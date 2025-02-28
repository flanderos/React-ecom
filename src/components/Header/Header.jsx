import React from 'react';

import {
  HeaderContainer,
  NavBar,
  StyledNavLink,
  CartIconContainer,
  CartCount

} from './Header.styled';

import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';


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
