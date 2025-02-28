import styled from "styled-components";
import { Link } from 'react-router-dom';

export const SuccessContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SuccessMessage = styled.h1`
  font-size: 2rem;
  color: #28a745;
`;

export const SuccessText = styled.p`
  font-size: 1.2rem;
  color: #333;
  margin: 20px 0;
`;

export const BackButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;