import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductsList from "../components/Main/ProductsList/index";
import ProductItem from "../components/Main/ProductsList/ProductItem/index";
import * as actions from "../actions";

class ProductContainer extends Component {
  render() {
    var { products, filter, sort, onAddToCart } = this.props;

    if (filter) {
      products = products.filter(product => {
        return (
          product.company.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        );
      });
    }

    //sort
    if (sort.by === "price") {
      products.sort((a, b) => {
        if (a.price > b.price) {
          return sort.value;
        } else if (a.price < b.price) {
          return -sort.value;
        } else return 0;
      });
    }

    var elmProduct = products.map((product, index) => {
      return <ProductItem key={index} product={product} onAddToCart={onAddToCart}/>;
    });

    return <ProductsList>{elmProduct}</ProductsList>;
  }
}

ProductContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      company: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  sort: PropTypes.shape({
      by: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
  }).isRequired
};

const mapStateToProps = state => {
  return {
    products: state.products,
    filter: state.filter,
    sort: state.sort
  };
};

const mapDispatchToProps = (dispatch, props) =>{
  return {
    onAddToCart: (product) =>{
      dispatch(actions.onAddToCart(product, 1))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
