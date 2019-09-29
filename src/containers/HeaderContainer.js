import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Header from "../components/header";
import BtnCart from "../components/header/BtnCart";

class HeaderContainer extends Component {
  render() {
    var { cart } = this.props;

    return (
      <Header>
        {this.countCart(cart)}
      </Header>
    );
  }

  countCart = (cart) =>{
      var num = <BtnCart>{0}</BtnCart>;
      if (cart.length > 0) {
          num = <BtnCart>{cart.length}</BtnCart>;
      }
      return num;
  }
}

HeaderContainer.propTypes = {
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

export default connect(
  mapStateToProps,
  null
)(HeaderContainer);
