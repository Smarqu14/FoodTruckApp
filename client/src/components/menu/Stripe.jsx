/* eslint-disable class-methods-use-this */
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';


export default class TakeMoney extends React.Component {
  onToken(token) {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then((response) => {
      response.json().then((data) => {
        toast(`We are in business, ${data.email}`);
      });
    });
  }

  render() {
    return (
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_51GrdEFGeuZLiHWJEn7KdacGlz9Z2OEulr6WrSCZJURdTCfthjas5ugPGCVavMvQitzmXZaxvb4ay4nmIXyLdyW0r00I19QotO4"
        amount={this.props.itemInfo.price * 100}
        name={this.props.itemInfo.item}
        billingAddress
        shippingAddress
      />
    );
  }
}
