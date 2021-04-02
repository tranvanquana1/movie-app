import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
    backgroundColor: "#ccc",
  },
  ul: {
    display: "flex",
    justifyContent: "center",
    padding: 5,
  },
}));

export default function PaginationRounded() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={5}
        variant="outlined"
        shape="rounded"
        color="standard"
        className={classes.ul}
      />
    </div>
  );
}
