import React from "react";
import './Header.css';


let Header = () => {
    return (
        
        <div className="header">
        <h1>DASHBOARD</h1>
            <nav className="bars">
                <a href="/">HOME</a>
                <a href="Contact">CONTACT</a>
                <a href="/Sales">SALES</a>
                <a href="/Products">PRODUCTS</a>
                <a href="/Settings">SETTINGS</a>
                <a href="/Signin">SIGNIN</a>
                <a href="/Signup">SIGNUP</a>
                
            </nav>
        </div>
    )
}

export default Header; 
