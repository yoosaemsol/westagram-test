import React, { Component } from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

import "../../../Styles/reset.scss";
import "../../../Styles/common.scss";

import facebook from "../../../images/yoojin/login/facebook.png";
import playstore from "../../../images/yoojin/login/playstore.png";
import appstore from "../../../images/yoojin/login/appstore.png";

class Login extends Component {
  constructor() {
    super();
    this.state = { id: "", pw: "" };
  }

  handleAllInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginKeyup = () => {
    this.state.id.includes("@") && this.state.pw.length > 5
      ? this.setState({ buttonChange: "darkBtn" })
      : this.setState({
          buttonChange: "lightBtn",
        });
  };

  goToMain = () => {
    this.props.history.push("/main-yoojin");
  };

  enterCommentList = (e) => {
    if (e.key === "Enter") {
      this.props.history.push("/main-yoojin");
    }
  };
  ///회원가입
  // goToMain = () => {
  //   fetch("http://10.58.0.202:8000/user/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.id,
  //       phone: "010-1234-4567",
  //       password: this.state.pw,
  //       nickname: "yoojin",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) =>
  //       result.message === "SUCCESS"
  //         ? alert("회원가입 성공~")
  //         : alert("회원가입 실패~")
  //     );
  // };

  // goToMain = () => {
  //   fetch("http://10.58.0.202:8000/user/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.id,
  //       phone: "010 - 1111 - 1111",
  //       password: this.state.pw,
  //       nickname: "yoojin",
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.token) {
  //         localStorage.setItem("token", result.token);
  //         this.props.history.push("/main-yoojin");
  //       } else alert("로그인 인증에 실패하셨");
  //     });
  // };
  //
  render() {
    return (
      <div className="body">
        <div className="loginContainer">
          <h1>Westagram</h1>
          <div className="inputContainer" onKeyUp={this.loginKeyup}>
            <input
              className="id"
              name="id"
              type="text"
              placeholder="Phone number, username, or email"
              onChange={this.handleAllInput}
              value={this.state.id}
            />
            <input
              className="pw"
              name="pw"
              type="password"
              placeholder="Password"
              onChange={this.handleAllInput}
              value={this.state.pw}
            />
            <button
              className={this.state.buttonChange}
              type="button"
              onClick={this.goToMain}
            >
              Log In
            </button>
          </div>
          <div className="orContainer">
            <div className="left"></div>
            <p>OR</p>
            <div className="right"></div>
          </div>
          <div className="loginFacebook">
            <img alt="facebook logo" src={facebook} />
            <p>Log in with Facebook</p>
          </div>
          <span>Forgot password?</span>
        </div>
        <div className="noAccount">
          <h5>
            Don't have an account? <span>Sign up</span>
          </h5>
        </div>
        <div className="getTheApp">
          <h3> Get the app. </h3>
          <div className="appImage">
            <img alt="appstore logo" src={appstore} />
            <img alt="playstore logo" src={playstore} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
