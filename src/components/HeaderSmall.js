import React from "react";
import './Header.css';


let Headersmall = () => {
    return (
        
        <div className="header">
        <h1>DASHBOARD</h1>
            <nav className="bars">
                <a href="/">HOME</a>
                <a href="/Signin">SIGNIN</a>
                <a href="/Signup">SIGNUP</a>
                
            </nav>
        </div>
    )
}

export default Headersmall; 