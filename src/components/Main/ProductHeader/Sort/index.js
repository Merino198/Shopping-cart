import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actions from "../../../../actions/index";


class Sort extends Component {
  onClick = (sortBy, sortValue) => {
    this.props.onSort({
      by: sortBy,
      value: sortValue
    })
  }

  render() {
    return (
      <div className="dropdown open">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Sắp Xếp
        </button>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <button
            className={
              this.props.sort.by === "price" && this.props.sort.value === 1
                ? "dropdown-item sort_selected"
                : "dropdown-item"
            }
            onClick={() => this.onClick("price", 1)}
          >
            <i className="fas fa-money-bill"></i> Tăng Dần
          </button>
          <button
            className={
              this.props.sort.by === "price" && this.props.sort.value === -1
                ? "dropdown-item sort_selected"
                : "dropdown-item"
            }
            onClick={() => this.onClick("price", -1)}
          >
            <i className="fas fa-money-bill"></i> Giảm Dần
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    sort: state.sort
  }
}

const mapDispatchToProps = (dispatch, props) =>{
  return {
    onSort: (sort) =>{
      dispatch(actions.onSort(sort));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
