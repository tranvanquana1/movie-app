import React, { useEffect, useState } from "react";
import { Container, Grid, Box, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//
import Header from "../components/Header";
import Footer from "../components/Footer";
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

  const [moviePredictList, setMoviePredictList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchPredictList = async () => {
      try {
        const params = { user_id: user_id };
        const response = await predictApi.getAll(params);
        console.log("Fetch movies successfully", response);

        setMoviePredictList(response.data);
      } catch (error) {
        console.log("Failed  to fetch movies: ", error);
      }
    };

    const fetchMovieList = async () => {
      try {
        const params = { page_size: 12 };
        const response = await movieApi.getAll(params);
        console.log("Fetch movies successfully", response);

        setMovieList(response.data);
      } catch (error) {
        console.log("Failed  to fetch movies: ", error);
      }
    };

    fetchPredictList();
    fetchMovieList();
  }, []);

  const handRefresh = async () => {
    try {
      const params = { user_id: user_id };
      const response = await predictApi.getAll(params);
      console.log("Fetch movies successfully", response);

      setMoviePredictList(response.data);
    } catch (error) {
      console.log("Failed  to fetch movies: ", error);
    }
  };

  console.log("movie list", movieList);

  return (
    <div>
      <Header />
      <Container fixed className={classes.root}>
        <div>
          <Box display="flex" p={1} style={{ paddingTop: 10 }}>
            <Box p={1} flexGrow={1} style={{ textAlign: "left" }}>
              <Typography variant="h5" style={{ padding: 0, color: "#dacb46" }}>
                Phim Được Đề Xuất
              </Typography>
            </Box>
            <Box p={1}>
              <Button variant="contained" color="primary" onClick={handRefresh}>
                Refresh
              </Button>
            </Box>
          </Box>
          <hr />
        </div>
        <div>
          <Box
            display="flex"
            flexDirection="row"
            p={1}
            style={{ overflowX: "scroll", padding: 0 }}
          >
            {moviePredictList.map((item) => (
              <Movie movie={item} key={item.index} />
            ))}
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
      <Footer />
    </div>
  );
};

export default Home;
