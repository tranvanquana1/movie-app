import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";

import userApi from "../api/userApi";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setRating(0);
    setOpen(false);
  };

  const handleClickStar = (e) => {
    setRating(e);
  };

  const handleSubmit = async () => {
    try {
      let params = {
        user_id: parseInt(localStorage.getItem("user_id")),
        movie_id: props.movieId,
        rating: rating,
      };
      const response = await userApi.update_rating(params);
      console.log("Fetch movies successfully", response);
      handleClose();
    } catch (error) {
      console.log("Failed  to fetch movies: ", error);
    }
  };

  return (
    <div>
      <StarBorderIcon
        style={{ color: "#fadb14", fontSize: 35, paddingTop: 10 }}
        onClick={handleClickOpen}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Mời đánh giá cho phim!!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {rating < 1 ? (
              <StarBorderIcon
                style={{ color: "#fadb14", fontSize: 35, paddingTop: 10 }}
                onClick={() => handleClickStar(1)}
              />
            ) : (
              <StarIcon
                style={{ color: "#fadb14", fontSize: 35, paddingTop: 10 }}
                onClick={() => handleClickStar(1)}
              />
            )}
            {rating < 2 ? (
              <StarBorderIcon
                style={{ color: "#fadb14", fontSize: 35, paddingTop: 10 }}
                onClick={() => handleClickStar(2)}
              />
            ) : (
              <StarIcon
                style={{ color: "#fadb14", fontSize: 35, paddingTop: 10 }}
                onClick={() => handleClickStar(2)}
              />
            )}
            {rating < 3 ? (
              <StarBorderIcon
                style={{ color: "#fadb14", fontSize: 35, paddingTop: 10 }}
                onClick={() => handleClickStar(3)}
              />
            ) : (
              <StarIcon
                style={{ color: "#fadb14", fontSize: 35, paddingTop: 10 }}
                onClick={() => handleClickStar(3)}
              />
            )}
            {rating < 4 ? (
              <StarBorderIcon
                style={{ color: "#fadb14", fontSize: 35, paddingTop: 10 }}
                onClick={() => handleClickStar(4)}
              />
            ) : (
              <StarIcon
                style={{ color: "#fadb14", fontSize: 35, paddingTop: 10 }}
                onClick={() => handleClickStar(4)}
              />
            )}
            {rating < 5 ? (
              <StarBorderIcon
                style={{ color: "#fadb14", fontSize: 35, paddingTop: 10 }}
                onClick={() => handleClickStar(5)}
              />
            ) : (
              <StarIcon
                style={{ color: "#fadb14", fontSize: 35, paddingTop: 10 }}
                onClick={() => handleClickStar(5)}
              />
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            HỦY
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Gửi đánh giá
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
