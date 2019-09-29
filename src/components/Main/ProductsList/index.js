import React, { Component } from "react";

class ProductsList extends Component {
  render() {
    return <div className="product-group">
      {this.props.children}
    </div>;
  }
}

export default ProductsList;
