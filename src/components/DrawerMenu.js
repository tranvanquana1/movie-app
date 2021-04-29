import React from "react";
import { Grid, Typography } from "@material-ui/core";

const DrawerMenu = () => {
  const arr = [
    "unknown",
    "Action",
    "Adventure",
    "Animation",
    "Children's",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Fantasy",
    "Film-Noir",
    "Horror",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War",
    "Western",
  ];
  return (
    <div>
      <Grid container style={{}}>
        {arr.map((item) => (
          <Grid
            item
            xs={6}
            style={{
              padding: 10,
              borderBottom: "1px solid #cccccc",
              cursor: "pointer",
            }}
          >
            <Typography variant="p">{item}</Typography>
          </Grid>
        ))}
        {arr.length % 2 !== 0 && (
          <Grid
            item
            xs={6}
            style={{ padding: 10, borderBottom: "1px solid #cccccc" }}
          ></Grid>
        )}
      </Grid>
    </div>
  );
};

export default DrawerMenu;
