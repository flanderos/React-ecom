import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { FaCheck } from 'react-icons/fa'; // Import the check icon

import {
  Card,
  ProductImage,
  ProductTitle,
  ProductDescription,
  Price,
  DiscountedPrice,
  OriginalPrice,
  Tags,
  Tag,
  Rating,
  Reviews,
  AddToCartButton,
  ViewButton

} from './product.styled';


const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false); 

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 

    addToCart(product); 

   
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false); 
    }, 1000);
  };

  return (
    <Card>
      <ProductImage src={product.image?.url} alt={product.title} />
      <ProductTitle>{product.title}</ProductTitle>
      <ProductDescription>{product.description || "No description available."}</ProductDescription>

      {product.discountedPrice && product.discountedPrice < product.price ? (
        <>
          <DiscountedPrice>Discounted Price: ${product.discountedPrice}</DiscountedPrice>
          <OriginalPrice>${product.price}</OriginalPrice>
        </>
      ) : (
        <Price>${product.price},-</Price>
      )}

      {product.rating ? (
        <Rating>Rating: {product.rating}/5</Rating>
      ) : (
        <Rating>No rating available</Rating>
      )}

      {product.tags && product.tags.length > 0 && (
        <Tags>
          {product.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      )}

      {product.reviews && product.reviews.length > 0 ? (
        <Reviews>{product.reviews.length} Reviews</Reviews>
      ) : (
        <Reviews>No reviews available</Reviews>
      )}

      <AddToCartButton onClick={handleAddToCart}>
        {isAdded ? <FaCheck /> : "Add to Cart"} 
      </AddToCartButton>
      
      <ViewButton to={`/product/${product.id}`}>View</ViewButton>
    </Card>
  );
};

export default ProductCard;



