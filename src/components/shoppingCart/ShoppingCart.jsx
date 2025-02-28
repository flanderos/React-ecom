import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import { useNavigate } from 'react-router-dom';

import {
  CartContainer,
  CartItem,
  CartItemImage,
  CartItemDetails,
  CartItemTitle,
  CartItemPrice,
  QuantityButtons,
  QuantityButton,
  RemoveButton,
  TotalPrice,
  CheckoutButton,
  ClearCartButton
} from './ShoppingCart.styled';


const ShoppingCart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    
    const increaseQuantity = (productId) => {
        const product = cartItems[productId];
        if (product) {
            updateQuantity(productId, product.quantity + 1);
        }
    };

   
    const decreaseQuantity = (productId) => {
        const product = cartItems[productId];
        if (product && product.quantity > 1) {
            updateQuantity(productId, product.quantity - 1);
        } else {
            removeFromCart(productId);
        }
    };

    
    const handleCheckout = () => {
        clearCart();
        navigate('/checkout-success');
    };

    // Calculate total price based on the number of products 
    const totalPrice = Object.values(cartItems).reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContainer>
            <h1>Your Shopping Cart</h1>
            {Object.keys(cartItems).length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {Object.values(cartItems).map(item => (
                        <CartItem key={item.id}>
                            <CartItemImage src={item.image?.url || "./images/default-placeholder.png"} alt={item.title} />
                            <CartItemDetails>
                                <CartItemTitle>{item.title}</CartItemTitle>
                                <CartItemPrice>${item.price}</CartItemPrice>
                                <QuantityButtons>
                                    <QuantityButton onClick={() => decreaseQuantity(item.id)}>-</QuantityButton>
                                    <span>{item.quantity}</span>
                                    <QuantityButton onClick={() => increaseQuantity(item.id)}>+</QuantityButton>
                                </QuantityButtons>
                            </CartItemDetails>
                            <RemoveButton onClick={() => removeFromCart(item.id)}>Remove</RemoveButton>
                        </CartItem>
                    ))}
                    <TotalPrice>Total: ${totalPrice.toFixed(2)}</TotalPrice>
                    <CheckoutButton onClick={handleCheckout}>Proceed to Checkout</CheckoutButton>
                    <ClearCartButton onClick={clearCart}>Clear All</ClearCartButton>
                </>
            )}
        </CartContainer>
    );
};

export default ShoppingCart;
