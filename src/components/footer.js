import React from 'react' ;
import '../css/header.css';
import '../css/footer.css';
const Footer = () =>{
    return(
        <footer>
            <div>
                <div className="social">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
                </div>
                <div className="copyright">
             copyright &copy; 2021. Idyllic
                </div>
            </div>
        </footer>
    )
} 
export default Footer;