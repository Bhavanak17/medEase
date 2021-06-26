import React from 'react'
import '../css/login.css'
import {Link} from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
            <h1>LOGIN</h1><br/>
            <input type="email" name="email" id="email" placeholder="Email Id" autoComplete="off"/><br/><br/>
            <input type="password" name="password" id="password" placeholder="Password" autoComplete="off"/><br/><br/><br/>
            <button className="si"type="submit " name="action">Sign In</button><br/><br/>

            Don't have account?<Link className="link" to="/signup">&nbsp;Sign Up </Link>
    </div>
  );
};

export default Login;