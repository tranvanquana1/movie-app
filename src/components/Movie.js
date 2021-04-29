import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import movieImg from "../static/images/gunnersaurus.jpg";

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    margin: "0px 5px",
    height: 240,
    backgroundImage: `url(${movieImg})`,
    backgroundSize: 345,
    border: "1px solid black",
    display: "flex",
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea style={{ alignSelf: "flex-end" }}>
        <CardContent
          style={{
            backgroundColor: "rgb(0,0,0,0.75)",
            color: "#ea8966",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            padding: "5px 10px ",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            style={{
              lineHeight: "90%",
              alignSelf: "center",
              margin: 0,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {props.movie.title}
            <Typography variant="subtitle1" style={{ color: "#ccc" }}>
              {props.movie.release_date}
            </Typography>
          </Typography>
          {/* <Typography
            variant="h5"
            style={{
              backgroundColor: "#000000cc",
              padding: "1px 10px",
              alignSelf: "center",
              boxShadow: "0 0 2px 2px #6b6b6b",
            }}
          >
            9.7
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
