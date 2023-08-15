import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="logIn">
      <div className="login__top">
        <div className="login__top__container">
          <div className="logo__and__text">
            <img
              className="logo"
              src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
              alt=""
            />

            <h2 className="text__underlogo">
              Connect with friends and the world around you on Facebook
            </h2>
          </div>
          <div className="login__button_container">
            <button className="login_button">
              <p>Login</p>
            </button>
          </div>
        </div>
      </div>
      <div className="login__bottom"></div>
    </div>
  );
}

export default Login;
