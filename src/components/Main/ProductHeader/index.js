import React, { Component } from "react";
import HeaderTitle from "./HeaderTitle";
import Sort from "./Sort";

class ProductHeader extends Component {
  render() {
    return (
      <div className="sort-item">
        <HeaderTitle/>
        <Sort/>
      </div>
    );
  }
}

export default ProductHeader;
