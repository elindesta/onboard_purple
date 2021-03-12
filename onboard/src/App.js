import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css"
import Navbar from "./Navbar"
import Login from "./Login";
/* import Dashboard from "./Dashboard"; */
import Hem from './Pages/hem';
import Info from './Pages/info';
import Faq from './Pages/faq';
import Kontakt from './Pages/kontakt';
import UserProvider from "./providers/UserProvider";
/* import Footer from './Footer'; */
function App() {
  return (
    <UserProvider>
      <Router>
        {/* <Navbar /> */}

        <div className="App">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/info">
              <Info />
            </Route>
            <Route path="/kontakt">
              <Kontakt />
            </Route>
            <Route path="/faq">
              <Faq />
            </Route>
            <Route path="/hem">
              <Hem />
            </Route>

          </Switch>
        </div>
      </Router>
      {/* <Footer /> */}
    </UserProvider>

  );
}

export default App;
