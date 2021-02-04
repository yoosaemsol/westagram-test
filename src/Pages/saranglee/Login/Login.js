import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import westagramLogo from '../../../images/saranglee/Login/westagramLogo.svg';

import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';
import '../common.scss';
import './Login.scss';

class LoginSarang extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      btnDisable: true
    }
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  }

  validation = e => {
    const { idValue, pwValue } = this.state;
    const isValid = idValue.includes('@') && pwValue.length >= 5;
    this.setState({
      btnDisable: isValid ? false : true
    })
    if (isValid && e.key === 'Enter') {
      this.goToMain();
    }
  }

  // signUp = () => {
  //   fetch("http://10.58.0.202:8000/user/signup", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: this.state.idValue,
  //       password: this.state.pwValue
  //     })
  //   })
  //   .then((response) => response.json())
  //   .then((result) => {
  //     result.message === "SUCCESS" ? alert("회원가입 성공") :  alert("회원가입 실패")
  //   })
  // }

  login = () => {
    fetch("http://10.58.0.202:8000/user/signin", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue
      })
    })
    .then((response) => response.json())
    .then((result) => {
      if (result.token) {
        localStorage.setItem("token", result.token);
        this.goToMain()
      } else alert("로그인 실패!")
    })
  }

  goToMain = () => {
    this.props.history.push('/main-sarang')
  }

  render() {
    const { btnDisable } = this.state;
    const { validation, handleInput, goToMain } = this;
    return (
      <main className="loginSarang">
        <div className="logo_login_wrap">
          <img className="logo_img" alt="Westagram Logo" src={ westagramLogo } />
          <div className="login_container" onKeyPress={validation}>
            <input 
              className="id_input"
              onChange={handleInput}
              type="text"
              name="idValue"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input 
              className="pw_input"
              onChange={handleInput}
              type="password"
              name="pwValue"
              placeholder="비밀번호"
            />
            <button 
              className="login_btn" 
              onClick={goToMain}
              disabled={btnDisable}
            >
              로그인
            </button>
          </div>
        </div>
        <a className="forgot_pw" href="https://www.instagram.com/accounts/password/reset">비밀번호를 잊으셨나요?</a>
      </main>
    );
  }
}

export default withRouter(LoginSarang);