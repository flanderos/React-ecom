import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from '../products/product';  
import { Link } from 'react-router-dom';

// Styled component for the product grid layout
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 10px; 
  padding: 10px; 
  align-items: start;
  justify-items: center;

  // Responsive design: 
  @media (max-width: 1340px) {
    grid-template-columns: repeat(3, 1fr); // Three columns for large tablets and smaller screens
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); // Two columns for medium screens
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // A column for small screens
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; // A column for extra small screens
    gap: 5px; 
    padding: 5px; 
  }
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin: 20px auto;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  display:flex;
  justify-content: center;
`;

const LandingPage = () => {
  const [products, setProducts] = useState([]); // State to hold the list of products
  const [searchTerm, setSearchTerm] = useState(''); // State to hold the search term

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

  // Function to handle changes in the search input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchInput
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <Grid>
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}> {/* Each product links to its detail page here */}
              <ProductCard product={product} /> {/* Render the product using the ProductCard component */}
            </Link>
          ))
        ) : (
          <p>No products found.</p> // Message displayed if no products match the search term
        )}
      </Grid>
    </>
  );
};

export default LandingPage;