import React, { useState, useEffect } from 'react';

import {
  Grid,
  SearchInput

} from './landingpage.styled';

import ProductCard from '../products/product';  
import { Link } from 'react-router-dom';


const LandingPage = () => {
  const [products, setProducts] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(''); 

  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://v2.api.noroff.dev/online-shop'); //
        const data = await response.json();
        setProducts(data.data);  
      } catch (error) {
        console.error('Error fetching products:', error); 
      }
    };
  
    fetchProducts(); 
  }, []); 

  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

 
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
            <Link to={`/product/${product.id}`} key={product.id}> 
              <ProductCard product={product} /> 
            </Link>
          ))
        ) : (
          <p>No products found.</p> 
        )}
      </Grid>
    </>
  );
};

export default LandingPage;