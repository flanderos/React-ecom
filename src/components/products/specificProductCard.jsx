import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa'; // Import checkmark icon
import { CartContext } from '../../contexts/CartContext';
import placeholderImg from "../../images/default-placeholder.png";

const Card = styled.div`
  max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
  overflow: hidden;
  background: white;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  color: #333;
`;

const Description = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin-top: 20px;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;

const DiscountedPrice = styled.span`
  color: red;
  font-size: 24px;
`;

const NormalPrice = styled.span`
  text-decoration: line-through;
  margin-left: 10px;
  color: #999;
  font-size: 20px;
`;

const Tags = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #333;
`;

const Rating = styled.div`
  font-size: 18px;
  color: #f39c12;
  margin-top: 20px;
`;

const ReviewsContainer = styled.div`
  margin-top: 20px;
`;

const Review = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

const ReviewText = styled.p`
  font-size: 14px;
  color: #555;
`;

const ReviewAuthor = styled.p`
  font-size: 12px;
  color: #999;
  text-align: right;
`;

const AddToCartButton = styled.button`
  padding: 15px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`;

const SpecificProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true); // Show check icon for 1 second
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

        {/* Display pricing information */}
        {product.discountedPrice && product.discountedPrice < product.price ? (
          <Price>
            <DiscountedPrice>${product.discountedPrice}</DiscountedPrice>
            <NormalPrice>${product.price}</NormalPrice>
          </Price>
        ) : (
          <Price>${product.price},-</Price>
        )}

        {/* Display tags */}
        {product.tags && product.tags.length > 0 && (
          <Tags>
            {product.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
        )}

        {/* Display rating if available */}
        {product.rating ? (
          <Rating>Rating: {product.rating}/5</Rating>
        ) : (
          <Rating>No rating available</Rating>
        )}

        {/* Display reviews */}
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