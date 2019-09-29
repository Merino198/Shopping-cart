import React, { Component } from "react";

class BtnCart extends Component {
  render() {
    return (
      <li className="navbar-item">
        <a
          href="#"
          id="myBtn"
          className="nav-link notification"
          data-toggle="modal"
          data-target="#modelId"
        >
          <i className="fas fa-shopping-cart" />
          <span className="badge">{this.props.children}</span>
        </a>
      </li>
    );
  }
}

export default BtnCart;
