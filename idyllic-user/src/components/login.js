import React, {useState} from 'react';
import '../css/login.css';
import {Link} from "react-router-dom";
import { login } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
const Login = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector(state => state.login);

  const userLogin =(e)=>{
    e.preventDefault();
    const user = {
      email, password
    }
    dispatch(login(user));
  }

  if(auth.authenticate){
    return <Redirect to={"/home"}/>
  }
  return (
    <div className="login-div">
    <div className="login">
      <form className="loginForm" onSubmit={userLogin}>
            <h1>LOGIN</h1><br/>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="off"/><br/><br/>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete="off"/><br/><br/><br/>
            <button className="si"type="submit " name="action">Sign In</button><br/><br/>

            <p>Don't have account?<Link className="link" to="/signup">&nbsp;Sign Up </Link></p>
            </form>
    </div>

    </div>
  );
};

export default Login;