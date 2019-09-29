import { combineReducers } from "redux";
import products from "./products";
import filter from "./filter";
import sort from "./sort";
import cart from "./cart";

const appReducer = combineReducers({
    products,
    filter,
    sort,
    cart
});

export default appReducer;