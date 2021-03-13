import React, { useEffect, useContext, useState } from "react";
import {
    BrowserRouter as Router,

    Link
} from "react-router-dom";

import { UserContext } from "../providers/UserProvider";
import { logOut } from "../services/firebase";
/* import './Navbar.css'; */
import Logo from "../img/kyh-logo.png";



export default () => {
    const user = useContext(UserContext);

    return (
        <div className="menu">
            {/*   <header className="nav-header">React + Firebase Authentication</header> */}

            <nav className="navBar">
                {/*  <img className="logo" alt="" src={Logo}></img> */}
                <ul>
                    <img alt="" src={Logo}></img>
                    <li>
                        <Link to="/">Hem</Link>

                    </li>
                    <li>
                        <Link to="info">Information</Link>
                    </li>
                    <li>
                        <Link to="kontakt">Kontakta Oss</Link>
                    </li>

                    <li>
                        <Link to="/faq">FAQ</Link>

                    </li>


                    {/*  <p>Welcome {user}</p> */}

                    <button className="logout" onClick={logOut}>
                        logout
      </button>


                </ul>

            </nav>
        </div>
    )
}
