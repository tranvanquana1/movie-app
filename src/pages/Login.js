import React, { useState } from "react";
import {
  Container,
  Grid,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem("username", username);
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
            action="/"
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
              onClick={() => handleSubmit()}
            >
              Đăng nhập
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
