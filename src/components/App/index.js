import React, { Component } from "react";
import HeaderContainer from "../../containers/HeaderContainer";
import Main from "../Main";
import ModalCart from "../ModalCart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        <Main />
        <ModalCart />
      </div>
    );
  }
}
export default App;
