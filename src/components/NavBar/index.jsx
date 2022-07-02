import React from "react";
import Logo from '../../../images/logo-bookmark.svg'

function Nav() {
    return (
        <header>
            <img id="logo" src={Logo}  alt="" />
            <nav className="navbar navbar-dark bg-dark">
                <button>FEATURES</button>
                <button>PRICING</button>
                <button>CONTACT</button>
                <button>LOGIN</button>
                
            </nav>
        </header>
    );
  };
  export default Nav;