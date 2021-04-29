import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  FormControl,
} from "@material-ui/core";

import userApi from "../api/userApi";
import { useHistory } from "react-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    console.log("register");
    try {
      let params = { username: username, password: password };
      const response = await userApi.register(params);
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
          <FormControl
            style={{
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              margin: 20,
            }}
          >
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
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ margin: 10 }}
              onClick={handleSubmit}
            >
              Đăng ký tài khoản
            </Button>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
