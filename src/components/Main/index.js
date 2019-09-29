import React, { Component } from "react";
import Filters from "./Filters";
import ProductHeader from "./ProductHeader";
import ProductContainer from "../../containers/ProductContainer";
import "./style.css";

class Main extends Component {
  render() {
    return (
      <div className="main-content">
        <main>
          <Filters />
          <div className="product-container">
            <ProductHeader />
            <ProductContainer />
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
