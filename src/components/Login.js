import Button from "@material-ui/core/Button";
import React from "react";
import "../styles/Login.css";

const Login = () => {
  const signIn = () => {
    //signIn
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Login
      </Button>
    </div>
  );
};

export default Login;
