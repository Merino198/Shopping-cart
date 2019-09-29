import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from "../../../actions/index";


class Filters extends Component {
  onClick = (event) => {
    this.props.onFilter(event.target.value);
  }

  render() {
    return (
      <div className="filters">
        <h5>Tìm theo hãng</h5>
        <button className="btn btn-primary" onClick={this.onClick} value="SamSung">SamSung</button>
        <button className="btn btn-primary" onClick={this.onClick} value="Apple">Apple</button>
        <button className="btn btn-primary" onClick={this.onClick} value="Oppo">Oppo</button>
        <button className="btn btn-primary" onClick={this.onClick} value="Xiaomi">Xiaomi</button>
        <button className="btn btn-primary" onClick={this.onClick} value="Huawei">Huawei</button>
        <button className="btn btn-primary" onClick={this.onClick} value="LG">LG</button>
        <button className="btn btn-primary" onClick={this.onClick} value="Sony">Sony</button>
        <button className="btn btn-primary" onClick={this.onClick} value="HTC">HTC</button>
        <button className="btn btn-primary" onClick={this.onClick} value="Nokia">Nokia</button>
        <button className="btn btn-primary" onClick={this.onClick} value="Lenovo">Lenovo</button>
        <button className="btn btn-primary" onClick={this.onClick} value="">Refresh</button>
      </div>
    );
  }
}

const mapStateToProp = state =>{
  return {}
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    onFilter: (filter) =>{
      dispatch(actions.onFilter(filter));
    }
  }
}

export default connect(mapStateToProp, mapDispatchToProps)(Filters);
