import React, { Component } from "react";
import "./Main.scss";
import Nav from "./Nav/Nav";
import Feeds from "./Feeds/Feeds";

class Main extends Component {
  render() {
    return (
      <div className="main-page">
        <Nav />
        <Feeds />
      </div>
    );
  }
}

export default Main;
