import React, { Component } from "react";

class ModalBody extends Component {
  render() {
    var { children, CartTotal } = this.props;

    return (
      <div className="modal-body">
        <div className="container-fluid">
          <table className="table table-bordered table-inverse">
            <thead className="thead-inverse text-center">
              <tr>
                <th>STT</th>
                <th>Tên Sản phẩm</th>
                <th>Hình Ảnh</th>
                <th>Số lượng</th>
                <th>Giá</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{children}</tbody>
            <tfoot>{CartTotal}</tfoot>
          </table>
        </div>
      </div>
    );
  }
}

export default ModalBody;
