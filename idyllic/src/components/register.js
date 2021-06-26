import React from 'react'
import {Link} from "react-router-dom";
import '../css/register.css'

const Register = () => {
    return (
<div className="register">
    <h1>REGISTER</h1><br/>
    <input className= "registerInput" type="text" name="name" placeholder="Name"/><br/><br/>
    {/* <input className= "registerInput" type="text" name="name" placeholder="Last Name"/><br/><br/> */}
    <input className= "registerInput" type="email" name="email" id="email" placeholder="Email address"/><br/><br/>
    <input className= "registerInput" type="password" name="password" placeholder="Password"/><br/><br/>
    <input className= "registerInput" type="password" name="password" id="password" placeholder="Confirm Password"/><br/><br/>
    <button className="registerInput-si" type="submit" name="action" >Register</button><br/><br/>
    Already have account?<Link className="link" to="/login" >&nbsp;Log In</Link>
</div>
    );
};
export default Register;