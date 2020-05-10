import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkOutItem/check-out-item.com";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./check-out-page.sty.scss";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.com";

const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${total}</div>

    <div
      style={{
        color: "red",
        margin: "20px",
      }}
    >
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
