import React from 'react' ;
import { Link } from "react-router-dom";
const Header = () =>{
    return(
        <div>
            <nav>
                <Link class="navb"to="/login">Login</Link>
                <Link class="navb"to="/register">Register</Link>
                <Link class="navb"to="/">Home</Link>
            </nav>
        </div>
    )
}
export default Header;