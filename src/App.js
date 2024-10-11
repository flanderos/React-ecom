import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header/Header';
import LandingPage from './components/landingpage/landingPage.js';
import ProductDetailPage from './components/products/productDetailPage.jsx';
import ShoppingCart from './components/shoppingCart/ShoppingCart.jsx';
import ContactPage from './components/contactPage/ContactPage.jsx';
import CheckoutSuccessPage from './components/checkout/CheckoutSuccessPage.jsx'; // Import the success page component
import "./styles/styles.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/checkout-success" element={<CheckoutSuccessPage />} /> {/* Add route for the success page */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;