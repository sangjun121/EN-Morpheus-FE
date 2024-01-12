import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import "./LoginBox.css";

const LoginBox = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordCheck, setRegisterPasswordCheck] = useState("");

  const handleLoginEmailChange = (event) => {
    setLoginEmail(event.target.value);
  };

  const handleLoginPasswordChange = (event) => {
    setLoginPassword(event.target.value);
  };

  const handleRegisterUsernameChange = (event) => {
    setRegisterUsername(event.target.value);
  };

  const handleRegisterEmailChange = (event) => {
    setRegisterEmail(event.target.value);
  };

  const handleRegisterPasswordChange = (event) => {
    setRegisterPassword(event.target.value);
  };

  const handleRegisterPasswordCheckChange = (event) => {
    setRegisterPasswordCheck(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //로그인 로직 추가할 공간
    console.log("Email:", loginEmail, "Password:", loginPassword);
  };

  const wrapper = document.querySelector(".wrapper");
  const loginLink = document.querySelector(".login-link");
  const registerLink = document.querySelector(".register-link");

  const clickRegisterLink = () => {
    registerLink.addEventListener("click", () => {
      wrapper.classList.add("active");
    });
  };

  const clickLoginLink = () => {
    loginLink.addEventListener("click", () => {
      wrapper.classList.remove("active");
    });
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              required
              value={loginEmail}
              onChange={handleLoginEmailChange}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              required
              value={loginPassword}
              onChange={handleLoginPasswordChange}
            />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?
              <a href="#" className="register-link" onClick={clickRegisterLink}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className="form-box register">
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <input
              type="text"
              required
              value={registerUsername}
              onChange={handleRegisterUsernameChange}
            />
            <label>Username</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              required
              value={registerEmail}
              onChange={handleRegisterEmailChange}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              required
              value={registerPassword}
              onChange={handleRegisterPasswordChange}
            />
            <label>Password</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              required
              value={registerPasswordCheck}
              onChange={handleRegisterPasswordCheckChange}
            />
            <label>Password Check</label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />I agree to the terms & conditions
            </label>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <div className="login-register">
            <p>
              Already have an account?
              <a href="#" className="login-link" onClick={clickLoginLink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginBox;
