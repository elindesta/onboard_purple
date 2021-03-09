import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import Info from "./components/info";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Logo from "./img/kyh-logo.png";
import SignIn from "./components/signIn";

function LogIn() {
  window.location.href = "signin";
}


export default function App() {
  return (
    <Router>
      <div className="menu">
        <nav className="navBar">
        <img className="logo" alt="" src={Logo}></img>
          <ul>
            <li>
              <Link to="info">Information</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
              
            </li>
            <li>
              <Link to="/contact">Kontakta Oss</Link>
            </li>
            <li>
              <button className="signInBtn" onClick={LogIn}>Logga In</button>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/">
          <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}