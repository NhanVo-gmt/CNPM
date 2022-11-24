import React from "react";
import { Link } from "react-router-dom";
import cover from "../../assets/cover.png";
import "./login.css";
import logo from "../../assets/logo.png";

function LoginPage() {
  return (
    <div className="login">
      <img
        src={cover}
        alt=""
        className="cover"
      />
      <div className="container">
          <p className="header">Sign in</p>
          <form method="POST" className="textbox">
            <label for="name" className="label">Username</label>
            <input type="text" id="name" placeholder="Enter your username" name="username" className="form-input" required />

            <label for="password" className="label">Password</label>
            <input type="password" id="password" placeholder="Enter your password" name="password" className="form-input" required />
            
            <Link to="/dashboard">
            <input type="submit" className="button" value="Sign in" />
            </Link>
            
          
      </form>
      
      </div>
      <img
            src={logo}
            alt=""
            className="logo-login"
      />
    </div>
  );
}

export default LoginPage;
