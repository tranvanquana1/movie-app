import React from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//
import Movie from "../components/Movie";
import Card from "../components/Card";
import PaginationRounded from "../components/PaginationRounded";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#3e3e3e",
    paddingBottom: "10px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Container fixed className={classes.root}>
      <div>
        <Box
          display="flex"
          flexDirection="row"
          p={1}
          style={{ overflowX: "scroll", padding: 0 }}
        >
          <Movie />
          <Movie />
          <Movie />
          <Movie />
          <Movie />
        </Box>
      </div>
      <div>
        <Box display="flex" p={1} style={{ paddingTop: 10 }}>
          <Box p={1} flexGrow={1} style={{ textAlign: "left" }}>
            <Typography variant="h5" style={{ padding: 0, color: "#dacb46" }}>
              Phim Mới Cập Nhập
            </Typography>
          </Box>
          <Box p={1}>
            <Typography variant="h6" style={{ color: "#ccc" }}>
              Item 1
            </Typography>
          </Box>
          <Box p={1}>
            <Typography
              variant="h6"
              style={{
                borderLeft: "3px solid #dacb46",
                color: "#ccc",
                padding: " 0 0 0 10px",
              }}
            >
              Item 1
            </Typography>
          </Box>
        </Box>
        <hr />
      </div>
      <div>
        <Grid container spacing="2">
          <Grid item xs="2">
            <Card />
          </Grid>
          <Grid item xs="2">
            <Card />
          </Grid>
          <Grid item xs="2">
            <Card />
          </Grid>
          <Grid item xs="2">
            <Card />
          </Grid>
          <Grid item xs="2">
            <Card />
          </Grid>
          <Grid item xs="2">
            <Card />
          </Grid>
          <Grid item xs="2">
            <Card />
          </Grid>
          <Grid item xs="2">
            <Card />
          </Grid>
          <Grid item xs="2">
            <Card />
          </Grid>
          <Grid item xs="2">
            <Card />
          </Grid>
          <Grid item xs="2">
            <Card />
          </Grid>
          <Grid item xs="2">
            <Card />
          </Grid>
        </Grid>
        <PaginationRounded />
      </div>
    </Container>
  );
};

export default Home;
