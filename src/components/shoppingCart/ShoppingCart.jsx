import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import styled from 'styled-components';
import Header from '../Header/Header';

const CartContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const CartItemImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
`;

const CartItemDetails = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;

const CartItemTitle = styled.h2`
  font-size: 18px;
  color: #333;
`;

const CartItemPrice = styled.p`
  font-size: 16px;
  color: #666;
`;

const CartItemQuantity = styled.input`
  width: 50px;
  padding: 5px;
  margin-left: 20px;
  font-size: 16px;
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const TotalPrice = styled.div`
  text-align: right;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

const CheckoutButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #28a745;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`;

const ShoppingCart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

    const handleQuantityChange = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateQuantity(productId, quantity);
        }
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <>
            <Header />
            <CartContainer>
                <h1>Your Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cartItems.map(item => (
                        <CartItem key={item.id}>
                            <CartItemImage src={item.image?.url || "./images/default-placeholder.png"} alt={item.title} />
                            <CartItemDetails>
                                <CartItemTitle>{item.title}</CartItemTitle>
                                <CartItemPrice>${item.price}</CartItemPrice>
                                <CartItemQuantity
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                                />
                            </CartItemDetails>
                            <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
                        </CartItem>
                    ))
                )}
                <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
                <CheckoutButton>Proceed to Checkout</CheckoutButton>
            </CartContainer>
        </>
    );
};

export default ShoppingCart;