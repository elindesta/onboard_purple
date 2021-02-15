import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./App.css";
import Home from "./components/home";
import Info from "./components/info";
import Rules from "./components/rules";
import Forum from "./components/forum";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Logo from "./img/kyh-logo.png";
import Courses from "./components/courses";
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
              <Link to="/">Hem</Link>

            </li>
            <li>
              <Link to="info">Information</Link>
            </li>
            <li>
              <Link to="/rules">Regler</Link>
              
            </li>
            <li>
              <Link to="/forum">Forum</Link>
              
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
          <Route path="/signin">
            <SignIn />
          </Route>
        <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/rules">
            <Rules />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}