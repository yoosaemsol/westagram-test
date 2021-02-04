import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="nav-logo">
            Westagram
          </a>
          <div className="nav-search">
            <input type="text" placeholder="검색" />
            <i className="fas fa-search"></i>
          </div>
          <ul className="nav-icons">
            <li>
              <a href="#">
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="far fa-paper-plane"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="far fa-compass"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="far fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="#" className="user-profile"></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
