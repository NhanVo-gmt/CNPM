import React from "react";
import { Link } from "react-router-dom";
import cover from "../../assets/cover.png";
import "./login.css";

function LoginPage() {
  return (
    <div >
      <div style={{backgroundImage:`url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HCMUT_official_logo.png/1200px-HCMUT_official_logo.png)`, width:"150px", height:"150px", backgroundSize:"cover"}}/>
      <img src={cover} alt="" className="cover" />
      <div className="container">
        <div style={{padding:"50px 0px", fontSize:"xx-large", display:"flex", justifyContent:"center"}}>
          <div style={{fontFamily:"Poppins", fontWeight:"600"}}>SIGN IN</div>
        </div>
        <form method="POST" className="textbox">
          <label for="name" className="label">
            Username
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your username"
            name="username"
            className="form-input"
            required
          />

          <label for="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            className="form-input"
            required
          />

          <Link to="/dashboard">
            <input type="submit" className="button" value="Sign in" />
          </Link>
        </form>
      </div>
      
    </div>
  );
}

export default LoginPage;
