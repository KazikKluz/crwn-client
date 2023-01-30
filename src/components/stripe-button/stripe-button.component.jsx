import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import axios from "axios";

import { paymentSuccess } from "../../redux/user/user.actions";

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ history, price, paymentSuccess }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GvoSoAJujcbjWBpyDFXekJRSQKYSHZULfy5CZ4kfd3qbFH5FrSqy2S9XnLl4nNKQl6JtX077ykuWu0LVR4pSFqA00TNZwnCIe";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      // eslint-disable-next-line
      .then((response) => {
        alert("Payment Succesful");
        paymentSuccess();
        history.push("/thankYou");
      })
      .catch((error) => {
        console.log("Payment error: ", error);
        alert(
          "There was an issue with you payment. Please make sure you use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      currency="EUR"
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  paymentSuccess: () => dispatch(paymentSuccess()),
});

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(StripeButton);
