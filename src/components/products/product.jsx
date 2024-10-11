import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { FaCheck } from 'react-icons/fa'; // Import the check icon

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  background-color: #fff;
  text-align: center;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  width: 100%;
  max-width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  flex-grow: 1;
  margin: 10px 0;
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

const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
  margin-left: 10px;
`;

const Tags = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: #eee;
  padding: 4px 4px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #333;

  &:hover {
    background-color: #ddd;
  }
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

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #218838;
  }
`;

const ViewButton = styled(Link)`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false); // State to manage button text/icon

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent any default link or form behavior
    e.stopPropagation(); // Stop event propagation to prevent navigation

    addToCart(product); // Add the product to the cart

    // Change button to check icon for 1 second
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false); // Revert to "Add to Cart" after 1 second
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
        {isAdded ? <FaCheck /> : "Add to Cart"} {/* Change text to icon on click */}
      </AddToCartButton>
      
      <ViewButton to={`/product/${product.id}`}>View</ViewButton>
    </Card>
  );
};

export default ProductCard;



