import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    var { product } = this.props;

    return (
      <div className="list-item">
        <div className="card">
          <img
            className="card-img-top"
            src={product.image}
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <div className="rating-result text-center">
              {this.ratingResult(product.rating)}
            </div>
            <h5 className="card-price">${product.price}.00</h5>
            <button
              className="btn btn-primary form-control"
              onClick={() => this.onAddToCart(product)}
            >
              <i className="fa fa-cart-plus" aria-hidden="true" /> Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }

  onAddToCart = product => {
    this.props.onAddToCart(product);
  };

  ratingResult(rating) {
    var result = [];
    for (let i = 1; i <= rating; i++) {
      result.push(
        <i className="fa fa-star checked" key={i} aria-hidden="true"></i>
      );
    }
    for (let j = 1; j <= 5 - rating; j++) {
      result.push(
        <i className="fa fa-star" key={rating + j} aria-hidden="true"></i>
      );
    }
    return result;
  }
}

export default ProductItem;
