import styled from "styled-components";
import { Link } from "react-router-dom";


export const Card = styled.div`
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

export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 10px 0;
`;

export const ProductDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  flex-grow: 1;
  margin: 10px 0;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
`;

export const DiscountedPrice = styled.p`
  font-size: 1.2rem;
  color: red;
  font-weight: bold;
`;

export const OriginalPrice = styled.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
  margin-left: 10px;
`;

export const Tags = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background-color: #eee;
  padding: 4px 4px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #333;

  &:hover {
    background-color: #ddd;
  }
`;

export const Rating = styled.p`
  font-size: 1rem;
  color: #f39c12;
  margin-top: 8px;
`;

export const Reviews = styled.div`
  margin-top: 8px;
  color: #555;
  font-size: 0.9rem;
`;

export const AddToCartButton = styled.button`
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

export const ViewButton = styled(Link)`
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
