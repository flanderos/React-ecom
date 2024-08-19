import React from 'react';
import styled from 'styled-components';

// Styled components for the product card
const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* Smooth transition */

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); 
    transform: translateY(-5px); 
    cursor:pointer;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ProductTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
`;

const DiscountedPrice = styled.p`
  font-size: 1.2rem;
  color: red;
  font-weight: bold;
`;

const Tags = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const Rating = styled.p`
  font-size: 1rem;
  color: #f39c12;
  margin-top: 8px;
`;

const Reviews = styled.div`
  margin-top: 8px;
  color: #555;
  font-size: 0.9rem;
`;

const ProductCard = ({ product }) => {
  const { title, description, price, discountedPrice, image, rating, tags, reviews, id } = product;

  return (
    <Card>
      <ProductImage src={image.url} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      
      {/* Display discounted price if available, otherwise display regular price */}
      {discountedPrice && discountedPrice < price ? (
        <DiscountedPrice>Discounted Price: ${discountedPrice}</DiscountedPrice>
      ) : (
        <Price>Price: ${price}</Price>
      )}
      
      {/* Display rating if available */}
      {rating && <Rating>Rating: {rating}/5</Rating>}
      
      {/* Display tags */}
      {tags && tags.length > 0 && (
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
      )}
      
      {/* Display reviews count */}
      {reviews && reviews.length > 0 && (
        <Reviews>{reviews.length} Reviews</Reviews>
      )}
    </Card>
  );
};

export default ProductCard;