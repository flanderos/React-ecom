import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 10px; 
  padding: 10px; 
  align-items: start;
  justify-items: center;

  // Responsive design: 
  @media (max-width: 1340px) {
    grid-template-columns: repeat(3, 1fr); // Three columns for large tablets and smaller screens
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); // Two columns for medium screens
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // A column for small screens
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; // A column for extra small screens
    gap: 5px; 
    padding: 5px; 
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  margin: 20px auto;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  display:flex;
  justify-content: center;
`;
