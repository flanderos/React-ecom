import React from 'react';


import {
  SuccessContainer,
  SuccessMessage,
  SuccessText,
  BackButton
} from "./CheckoutSuccessPage.styled";


const CheckoutSuccessPage = () => {
  return (
    <div>
    <SuccessContainer>
      <SuccessMessage>Thank you for your purchase!</SuccessMessage>
      <SuccessText>Your order has been successfully placed. You will receive an email confirmation shortly.</SuccessText>
      <BackButton to="/">Continue Shopping</BackButton>
    </SuccessContainer>
    </div>
  );
};

export default CheckoutSuccessPage;