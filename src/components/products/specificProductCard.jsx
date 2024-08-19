import React from 'react';
import styled from 'styled-components';
import placeholderImg from "../../images/default-placeholder.png";


const Card = styled.div`
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
  overflow: hidden;
  background: white;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Description = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
`;

const Price = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

const DiscountedPrice = styled.span`
  color: red;
`;

const NormalPrice = styled.span`
  text-decoration: line-through;
  margin-left: 10px;
  color: #999;
`;

const ProductCard = ({ product }) => {

    return (
        <Card>
            {product ? (
                <>
                    <ProductImage src={product.image?.url || placeholderImg} alt={product.title || "No Title"} />
                    <Content>
                        <Title>{product.title || "No Title Available"}</Title>
                        <Description>{product.description || "No description available."}</Description>
                        <Price>{product.price ? `$${product.price}` : "Price unavailable"}</Price>
                    </Content>
                </>
            ) : (
                <p>Loading product details...</p> // Eller en feilmelding hvis det er hensiktsmessig
            )}
        </Card>
    );
};

export default ProductCard;
