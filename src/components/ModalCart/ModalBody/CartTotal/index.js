import React, { Component } from "react";

class CartTotal extends Component {
  render() {
    var { cart } = this.props;

    return (
      <tr>
        <th colSpan="4">Tổng Tiền</th>
        <th colSpan="2" className="text-center">
          ${this.showTotalPrice(cart)}.00
        </th>
      </tr>
    );
  }

  showTotalPrice = (cart) => {
    var total = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].product.price * cart[i].quantity;
      }
    }
    return total;
  };
}

export default CartTotal;
