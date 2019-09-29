import React, { Component } from "react";
import ModalHeader from "./ModalHeader";
import CartContainer from "../../containers/CartContainer";
import "./style.css";

class ModalCart extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <ModalHeader />
            <CartContainer />
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                PURCHASE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalCart;
