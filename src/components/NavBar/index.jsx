import React from "react";
import Logo from '../../../images/logo-bookmark.svg'
import './index.css'

function Nav() {
    return (
        <div className="header">
            <div className="Logo">
            <img id="logo" src={Logo}  alt="" />
            </div>
            <div className="nav-bar">
                <button className="nav-btns">FEATURES</button>
                <button className="nav-btns">PRICING</button>
                <button className="nav-btns">CONTACT</button>
                <button className="nav-btns" id="login-btn">LOGIN</button>
                
            </div>
        </div>
    );
  };
  export default Nav;