import React from "react";
import { Grid, Typography } from "@material-ui/core";

const DrawerMenu = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
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
            <Typography variant="p">Item {item}</Typography>
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
