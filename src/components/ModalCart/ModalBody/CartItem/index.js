import React, { Component } from "react";

class CartItem extends Component {

  render() {
    var { item, stt } = this.props;
    var { quantity } = item;

    return (
      <tr className="text-center font-weight-bold">
        <td scope="row">{stt}</td>
        <td>{item.product.name}</td>
        <td>
          <img src={item.product.image} alt={item.product.name} />
        </td>
        <td>
          <div className="input-group">
            <button
              className="btn btn-danger minus"
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity - 1)
              }
            >
              -
            </button>
            <input
              type="number"
              name="quantity"
              className="btn quantity"
              value={quantity}
              onChange={(e) => this.onChange(item.product, e)}
              onBlur={(e) => this.onBlur(item.product, e)}
            />
            <button
              className="btn btn-primary plus"
              onClick={() =>
                this.onUpdateQuantity(item.product, item.quantity + 1)
              }
            >
              +
            </button>
          </div>
        </td>
        <td>${this.showSubTotal(item.product.price, item.quantity)}.00</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.onDelete(item.product)}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    );
  }

  onUpdateQuantity = (product, quantity) => {
    if (quantity > 0) {
      this.props.onUpdateProduct(product, quantity);
    }
  };

  showSubTotal = (price, quantity) => {
    return price * quantity;
  };

  onDelete = product => {
    this.props.onDeleteProduct(product);
  };

  onChange = (product, e) => {
    var quantity = e.target.value;
    this.props.onChangeQuantity(product, quantity);
  };

  onBlur = (product, e) =>{
    var quantity = e.target.value;
    if (quantity < 0) {
      this.props.onChangeQuantity(product, 1);
    }
  }
}

export default CartItem;
