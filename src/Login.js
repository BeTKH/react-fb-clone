import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {

  
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
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
              <button className="login_button" type="submit" onClick={signIn}>
                <p>Login</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
