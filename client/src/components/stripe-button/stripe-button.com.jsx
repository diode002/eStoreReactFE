import React from "react";
import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_kebrrHJsWlz4xjNn0QCDm3ka00SlkrthZG";

  const onToken = (token) => {
    axios({
      url: "payments",
      method: "post",
      data: { amount: priceForStripe, token },
    })
      .then((response) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There is a issue with your credit card. Please make sure to use provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
