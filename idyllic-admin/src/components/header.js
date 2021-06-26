import React from 'react' ;
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions";
import logo from "../images/logo.png";

const Header = () =>{
    const auth = useSelector(state => state.login);
const dispatch = useDispatch();

const logout = ()=>{
    dispatch(signout());
  }

const renderNonLoggedInUser = () => {
    return(
            <nav className="nav-head">
                <img className="img-logo" src={logo} alt="logo" />
                <Link className="navb"to="/login">Login</Link>
                <Link className="navb"to="/register">Register</Link>
                <Link className="navb"to="/">Home</Link>
            </nav>
    )
}

const renderLoggedInUser = () => {
    return(
            <nav>
                <Link className="navb" onClick={logout}>Sign out</Link>
                <Link className="navb"to="/home">Home</Link>
                <Link className="navb"to="/dashboard">Requests</Link>

            </nav>
    )
}

    return(
        <div>
        {auth.authenticate ? renderLoggedInUser() : renderNonLoggedInUser()}
        </div>
    )
}
export default Header;