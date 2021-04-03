import React, { useEffect, useState } from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//
import Movie from "../components/Movie";
import Card from "../components/Card";
import PaginationRounded from "../components/PaginationRounded";
import movieApi from "../api/movieApi";
import predictApi from "../api/predictApi";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#3e3e3e",
    paddingBottom: "10px",
  },
});

const Home = () => {
  const classes = useStyles();

  const [movieList, setMovieList] = useState([]);

  const user_id = localStorage.getItem("username");

  useEffect(() => {
    const fetchPredictList = async () => {
      try {
        const params = { user_id: user_id };
        const response = await predictApi.getAll(params);
        console.log("Fetch movies successfully", response);

        setMovieList(response.data);
      } catch (error) {
        console.log("Failed  to fetch movies: ", error);
      }
    };

    fetchPredictList();
  }, []);

  console.log("movie list", movieList);

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
        <Grid container spacing={2}>
          {movieList.map((item) => (
            <Grid item xs={3} key={item.index}>
              <Card movie={item} />
            </Grid>
          ))}
        </Grid>
        <PaginationRounded />
      </div>
    </Container>
  );
};

export default Home;
