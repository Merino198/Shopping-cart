import React, { Component } from "react";
import Icon from "./Icon";
import Home from "./Home";
import Pages from "./Pages";
import Blog from "./Blog";
import Shop from "./Shop";
import Contact from "./Contact";
import BtnSearch from "./BtnSearch";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <section className="header main-menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Icon/>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <Home/>
              <Pages/>
              <Blog/>
              <Shop/>
              <Contact/>
              <BtnSearch/>
              {this.props.children}
            </ul>
          </div>
        </nav>
      </section>
    );
  }
}

export default Header;
