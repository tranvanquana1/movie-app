import React, { useState } from "react";
import {
  Redirect,
  Route,
  Link,
  useHistory,
  withRouter,
} from "react-router-dom";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  FormControl,
  FormGroup,
  // Link,
} from "@material-ui/core";

import userApi from "../api/userApi";
import { useEffect } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit");

    try {
      let params = { username: username, password: password };
      const response = await userApi.login(params);
      console.log("Fetch movies successfully", response);

      localStorage.setItem("username", response.data.username);
      localStorage.setItem("user_id", response.data.user_id);
      history.replace("/");
    } catch (error) {
      console.log("Failed  to fetch movies: ", error);
    }
  };
  return (
    <Container fixed style={{ backgroundColor: "#ccc" }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={5}
        style={{ height: "100vh" }}
      >
        <Grid
          item
          xs={4}
          style={{
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: 5,
          }}
        >
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Recommend App
          </Typography>
          <form
            // onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              margin: 20,
            }}
          >
            <FormGroup>
              <TextField
                id="outlined-username-input"
                label="Username"
                type="username"
                autoComplete="current-username"
                variant="outlined"
                value={username}
                style={{ margin: 10 }}
                onChange={(e) => handleUsername(e)}
              />
            </FormGroup>
            <FormGroup>
              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                value={password}
                style={{ margin: 10 }}
                onChange={(e) => handlePassword(e)}
              />
            </FormGroup>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: 10 }}
              onClick={handleSubmit}
              type="submit"
            >
              ????ng Nh???p
            </Button>
            <Link style={{ margin: 10 }} to="/register">
              T???o t??i kho???n
            </Link>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withRouter(Login);
