import React, { createContext, useState } from 'react'; // Sørg for at useState er importert

// Create Context
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    // Add item to Cart
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingProduct = prevItems[product.id];
            if (existingProduct) {
                return {
                    ...prevItems,
                    [product.id]: {
                        ...existingProduct,
                        quantity: existingProduct.quantity + 1
                    }
                };
            } else {
                return {
                    ...prevItems,
                    [product.id]: {
                        ...product,
                        quantity: 1
                    }
                };
            }
        });
    };

    // Update Cart
    const updateQuantity = (productId, newQuantity) => {
        setCartItems(prevItems => {
            const existingProduct = prevItems[productId];
            if (existingProduct) {
                if (newQuantity <= 0) {
                    const { [productId]: removed, ...rest } = prevItems;
                    return rest;
                } else {
                    return {
                        ...prevItems,
                        [productId]: {
                            ...existingProduct,
                            quantity: newQuantity
                        }
                    };
                }
            }
            return prevItems;
        });
    };

    // Remove items from Cart
    const removeFromCart = (productId) => {
        setCartItems(prevItems => {
            const { [productId]: removed, ...rest } = prevItems;
            return rest;
        });
    };

    // Clear Cart
    const clearCart = () => {
        setCartItems({});
    };

    // Calculate the total number of items in the shopping cart
    const getCartItemCount = () => {
        return Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, clearCart, getCartItemCount }}>
            {children}
        </CartContext.Provider>
    );
};
