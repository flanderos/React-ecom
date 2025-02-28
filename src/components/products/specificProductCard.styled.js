import styled from "styled-components";

export const Card = styled.div`
  max-width: 800px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
  overflow: hidden;
  background: white;
  padding: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
`;

export const Content = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #333;
`;

export const Description = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  margin-top: 20px;
`;

export const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0;
`;

export const DiscountedPrice = styled.span`
  color: red;
  font-size: 24px;
`;

export const NormalPrice = styled.span`
  text-decoration: line-through;
  margin-left: 10px;
  color: #999;
  font-size: 20px;
`;

export const Tags = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #333;
`;

export const Rating = styled.div`
  font-size: 18px;
  color: #f39c12;
  margin-top: 20px;
`;

export const ReviewsContainer = styled.div`
  margin-top: 20px;
`;

export const Review = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

export const ReviewText = styled.p`
  font-size: 14px;
  color: #555;
`;

export const ReviewAuthor = styled.p`
  font-size: 12px;
  color: #999;
  text-align: right;
`;

export const AddToCartButton = styled.button`
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
