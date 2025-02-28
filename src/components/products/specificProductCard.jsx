import React, { useContext, useState } from 'react';
import { FaCheck } from 'react-icons/fa'; // Import checkmark icon
import { CartContext } from '../../contexts/CartContext';
import placeholderImg from "../../images/default-placeholder.png";

import {
  Card,
  ProductImage,
  Content,
  Title,
  Description,
  Price,
  DiscountedPrice,
  NormalPrice,
  Tags,
  Tag,
  Rating,
  ReviewsContainer,
  Review,
  ReviewText,
  ReviewAuthor,
  AddToCartButton,

} from './specificProductCard.styled';


const SpecificProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true); 
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  return (
    <Card>
      <ProductImage src={product.image?.url || placeholderImg} alt={product.title || "No Title"} />
      <Content>
        <Title>{product.title || "No Title Available"}</Title>
        <Description>{product.description || "No description available."}</Description>

        
        {product.discountedPrice && product.discountedPrice < product.price ? (
          <Price>
            <DiscountedPrice>${product.discountedPrice}</DiscountedPrice>
            <NormalPrice>${product.price}</NormalPrice>
          </Price>
        ) : (
          <Price>${product.price},-</Price>
        )}

       
        {product.tags && product.tags.length > 0 && (
          <Tags>
            {product.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
        )}

       
        {product.rating ? (
          <Rating>Rating: {product.rating}/5</Rating>
        ) : (
          <Rating>No rating available</Rating>
        )}

       
        <ReviewsContainer>
          <h3>Customer Reviews:</h3>
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <Review key={index}>
                <ReviewText>"{review.description}"</ReviewText>
                <ReviewAuthor>- {review.username}</ReviewAuthor>
              </Review>
            ))
          ) : (
            <ReviewText>No reviews available</ReviewText>
          )}
        </ReviewsContainer>

        <AddToCartButton onClick={handleAddToCart}>
          {isAdded ? <FaCheck /> : "Add to Cart"}
        </AddToCartButton>
      </Content>
    </Card>
  );
};

export default SpecificProductCard;