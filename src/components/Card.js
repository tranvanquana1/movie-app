import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import movieImg from "../static/images/gunnersaurus.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: "2px solid black",
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={movieImg}
          title="Contemplative Reptile"
        />
        <CardContent
          style={{
            padding: " 5 0 5 10px",
            backgroundColor: "#3e3e3e",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            style={{
              margin: 0,
              color: "#ce9241",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: 16,
            }}
          >
            {props.movie.movie_title}
            <Typography variant="subtitle1" style={{ color: "#ccc" }}>
              {props.movie.release_date}
            </Typography>
          </Typography>
          <Typography
            variant="h5"
            style={{
              backgroundColor: "#000000cc",
              color: "#ce9241",
              padding: "1px 10px",
              alignSelf: "center",
              boxShadow: "0 0 2px 2px #6b6b6b",
              whiteSpace: "nowrap",
              overflow: "hidden",
              width: 38,
            }}
          >
            {props.movie.predict_rating}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
