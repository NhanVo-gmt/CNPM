import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import cover from "../../assets/cover.png";
import "./login.css";
import { Navigate } from "react-router-dom";
function LoginPage() {
  
  const [account,updateAccount] = useState('')
  const [validUser, updateValidUser] = useState(true)
  const navigate = useNavigate()

  const changePageHandler = ()=>{
    if (account=="admin"){navigate("/dashboard")}
    if (account=="collector" || account=="janitor") {navigate("/employee")}
    else{updateValidUser(false)}
  }

  return (
    <div >
      {/* <div style={{backgroundImage:`url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HCMUT_official_logo.png/1200px-HCMUT_official_logo.png)`, width:"150px", height:"150px", backgroundSize:"cover"}}/> */}
      <img src={cover} alt="" className="cover" />
      <div className="container">
        <div style={{padding:"20px 0px", fontSize:"xx-large", display:"flex", justifyContent:"center"}}>
          <div style={{fontFamily:"Poppins", fontWeight:"600"}}>SIGN IN</div>
        </div>
        <form method="POST" className="textbox">

          <div style={{display:"flex",flexDirection:"column"}}>
            <div>
              <label for="name" className="label">Username</label>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
            <input
              value={account}
              onChange={(e)=>{updateAccount(e.currentTarget.value)}}
              type="text"
              id="name"
              placeholder="Enter your username"
              name="username"
              className="form-input"
              required
            />
            </div>
          </div>
         
          <div style={{display:"flex",flexDirection:"column"}}>
            <div>
              <label for="name" className="label">Password</label>
            </div>
            <div style={{display:"flex", justifyContent:"center"}}>
            <input
              type="password"
              id="name"
              placeholder="Enter your username"
              name="username"
              className="form-input"
              required
            />
            </div>
          </div>

          
            <div style={{display:"flex",justifyContent:"center"}}>
              <div onClick={changePageHandler} className="button">Sign In</div>
            </div>
          
          <div style={{display:"flex",justifyContent:"center", paddingTop:"20px"}}>
          {!validUser && <div style={{color:"red"}}>Invalid User</div>}
          </div>
        </form>
      </div>
      
    </div>
  );
}

export default LoginPage;
