import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="login">
      <p>
        Login Page
      </p>
      <br />
      <br />
      <Link to="/dashboard">
        <button>Login Successfully</button>
      </Link>
    </div>
  );
}

export default LoginPage;
