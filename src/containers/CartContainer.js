import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../actions";
import ModalBody from "../components/ModalCart/ModalBody";
import CartItem from "../components/ModalCart/ModalBody/CartItem";
import CartTotal from "../components/ModalCart/ModalBody/CartTotal";

class CartContainer extends Component {
  render() {
    var { cart } = this.props;

    return (
      <ModalBody CartTotal={this.showCartTotal(cart)}>
        {this.showCartItem(cart)}
      </ModalBody>
    );
  }

  showCartItem = cart => {
    var result = null;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            stt={index + 1}
            onDeleteProduct={this.props.onDeleteProduct}
            onUpdateProduct={this.props.onUpdateProduct}
            onChangeQuantity={this.props.onChangeQuantity}
          />
        );
      });
    }
    return result;
  };

  showCartTotal = cart => {
    var result = null;
    if (cart.length > 0) {
      result = <CartTotal cart={cart}/>;
    }
    return result;
  };
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        company: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch, props) =>{
  return {
    onDeleteProduct: (product) =>{
      dispatch(actions.onDeleteProduct(product));
    },
    onUpdateProduct: (product, quantity) =>{
      dispatch(actions.onUpdateProduct(product, quantity));
    },
    onChangeQuantity: (product, quantity)=>{
      dispatch(actions.onChangeQuantity(product, quantity));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartContainer);
