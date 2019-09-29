import * as types from "../constants/ActionType";

export const onFilter = filter => {
  return {
    type: types.FILTER,
    filter
  };
};

export const onSort = sort => {
  return {
    type: types.SORT,
    sort
  };
};

export const onAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  };
};

export const onDeleteProduct = product => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product
  };
};

export const onUpdateProduct = (product, quantity) => {
  return {
    type: types.UPDATE_PRODUCT_IN_CART,
    product,
    quantity
  };
};

export const onChangeQuantity = (product, quantity) =>{
  return{
    type: types.CHANGE_QUANTITY_IN_CART,
    product,
    quantity
  }
}
