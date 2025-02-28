import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
`;

export const CartItemImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 8px;
`;

export const CartItemDetails = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;

export const CartItemTitle = styled.h2`
  font-size: 18px;
  color: #333;
`;

export const CartItemPrice = styled.p`
  font-size: 16px;
  color: #666;
`;

export const QuantityButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

export const TotalPrice = styled.div`
  text-align: right;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`;

export const CheckoutButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #28a745;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`;

export const ClearCartButton = styled.button`
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #ffc107;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #e0a800;
  }
`;
