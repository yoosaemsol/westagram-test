import React, { Component } from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      validation: true,
    };
  }

  goToMain = () => {
    this.props.history.push("/main-saemsol");
  };

  validation = () => {
    const idCondition = this.state.id.includes("@");
    const pwCondition = this.state.pw.length > 4;

    idCondition && pwCondition
      ? this.setState({ validation: false })
      : this.setState({ validation: true });
  };

  handleIdInput = (e) => {
    const userId = e.target.value;
    this.setState({
      id: userId,
    });
  };

  handlePwInput = (e) => {
    const userPw = e.target.value;

    this.setState({
      pw: userPw,
    });
  };

  loginValidate = () => {
    fetch("http://10.58.4.165:8000/users", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        full_name: "saemsol7",
        phone_number: "01075527",
        username: "samy7",
      }),
    })
      .then((response) => response.json())
      // .then((result) => {
      //   console.log("====================");
      //   console.log("백엔드에서 오는 응답 메세지:", result.message)
      // })
      .then((result) => this.checkJoinResult(result));
    // .then((result) => this.checkLoginResult(result));
  };

  //로그인
  // checkLoginResult = (result) => {
  //   console.log(result);
  //   if (result.message === "SUCCESS") {
  //     localStorage.setItem("token", result.token);
  //     this.goToMain();
  //   } else {
  //     alert("우리회원이 아닙니다 🤔");
  //   }
  // };

  //회원가입
  checkJoinResult = (result) => {
    console.log(result);
    // console.log(this.state.id);
    // console.log(this.state.pw);
    if (result.message === "ALREADY_SINGUP") {
      alert("이미 우리의 회원입니다! 로그인을 진행해주세요! ✅");
    } else {
      alert("회원가입이 되었습니다 ✨");
    }
  };

  render() {
    return (
      <div className="login-page">
        <section className="log-in">
          <h1>Westagram</h1>
          <form className="login-form" onKeyUp={this.validation}>
            <input
              className="input-id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              required
              onChange={this.handleIdInput}
            />
            <input
              className="input-pw"
              type="password"
              placeholder="비밀번호"
              required
              onChange={this.handlePwInput}
            />
            <a onClick={this.loginValidate}>
              <button
                className="login-btn"
                type="button"
                disabled={this.state.validation}
              >
                로그인
              </button>
            </a>
            <div className="divider">
              <span>또는</span>
            </div>
            <a className="log-in-facebook" href="#">
              <i className="fab fa-facebook-square"></i>
              <span>Facebook으로 로그인</span>
            </a>
          </form>
          <span className="forgot-pw">비밀번호를 잊으셨나요?</span>
        </section>
        <section className="join">
          <span>
            계정이 없으신가요? <span>가입하기</span>
          </span>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
