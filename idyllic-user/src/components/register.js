import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../css/register.css';
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../actions";
import { Redirect } from 'react-router-dom';

const Register = () => {

    const user = useSelector((state) => state.register);
    const auth = useSelector((state) => state.login);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const dispatch = useDispatch();
  
    const userSignup = (e) => {
        e.preventDefault();
        const user = { name, location, email, password };
        dispatch(signup(user));
      };

      if(auth.authenticate){
        return <Redirect to={"/home"}/>
      }
    

    return (
      <div className="register-div">
        <div className="register">
    <form className="registerForms" onSubmit={userSignup}>
    <h1 className="h1-register">REGISTER</h1><br/>
    <input className= "registerInput" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"/><br/><br/>
    {/* <input className= "registerInput" type="text" name="name" placeholder="Last Name"/><br/><br/> */}
    <input className= "registerInput" type="text" name="location" id="location" value={location} onChange={(e) => setLocation(e.target.value)}  placeholder="Address"/><br/><br/>
    <input className= "registerInput" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email address"/><br/><br/>
    <input className= "registerInput" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password"/><br/><br/>
    <button className="registerInput-si" type="submit" name="action" >Register</button><br/><br/>
    <p>Already have account?<Link className="link" to="/login" >&nbsp;Log In</Link></p>
    </form>
</div>
      </div>

    );
};
export default Register;