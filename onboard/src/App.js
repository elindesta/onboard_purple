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
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey: "AIzaSyDA9ozpcEFArjsc2x_eC32RgX8zKcfxpWo",
  authDomain: "onboard-purple.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,

    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (

          <div>
            <Router>
              <div className="menu">
                <nav>
                  <ul>
                    <img alt="" src={Logo}></img>
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
                  </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
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


            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            />
          </div>

        )
          : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />

          )

        }
      </div>
    );
  }
}
export default App;