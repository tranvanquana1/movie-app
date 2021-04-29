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

import { useState } from "react";
import Register from "./pages/Register";

function App() {
  const [user, setUser] = useState(localStorage.getItem("username"));

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route
            path="/"
            render={() => {
              return localStorage.getItem("username") ? (
                <Home />
              ) : (
                <Redirect to="/login" />
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
