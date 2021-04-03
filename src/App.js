import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

//
import Home from "./pages/Home";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {localStorage.getItem("username") !== null && (
            <Route path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
          )}

          {localStorage.getItem("username") === null && (
            <Route>
              <Redirect to={{ pathname: "/login" }} />
            </Route>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
