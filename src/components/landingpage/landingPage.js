import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../products/product';  
import { Link } from 'react-router-dom';

// Styled component for the product grid layout
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
  padding: 20px; 

  // Responsive design: 
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); // Two columns for medium screens
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Single column for small screens
  }
`;

const LandingPage = () => {
  const [products, setProducts] = useState([]); // State to hold the list of products

  // Fetch products from the API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://v2.api.noroff.dev/online-shop'); // API call to fetch products
        const data = await response.json();
        setProducts(data.data);  // Update state with fetched products
      } catch (error) {
        console.error('Error fetching products:', error); // Log any errors that occur during the fetch
      }
    };
  
    fetchProducts(); // Invoke the fetch function
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <Grid>
      {Array.isArray(products) && products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id}> {/* Each product links to its detail page here */}
          <ProductCard product={product} /> {/* Render the product using the ProductCard component */}
        </Link>
      ))}
    </Grid>
  );
};

export default LandingPage;