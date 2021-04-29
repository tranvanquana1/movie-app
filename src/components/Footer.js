import React from "react";
import { Container, Grid, Typography, Link } from "@material-ui/core";

const Footer = () => {
  return (
    <Container
      fixed
      style={{
        backgroundColor: "#4a4a4a",
        borderTop: "3px solid #009688",
        paddingBottom: 20,
      }}
    >
      <Grid container>
        <Grid container item xs={8} style={{ borderRight: "1px solid #ccc" }}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              style={{
                color: "#dacb46",
                margin: 10,
                paddingBottom: 5,
                borderBottom: "1px solid #ccc",
              }}
            >
              Liên kết phim
            </Typography>
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ margin: 10 }}>
                <Link href="#" style={{ color: "#ccc" }}>
                  Naruto
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ margin: 10 }}>
                <Link href="#" style={{ color: "#ccc" }}>
                  One Piece
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ margin: 10 }}>
                <Link href="#" style={{ color: "#ccc" }}>
                  Dragon Ball
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle1" style={{ margin: 10 }}>
                <Link href="#" style={{ color: "#ccc" }}>
                  Connan
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={4}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              style={{
                color: "#dacb46",
                margin: 10,
                paddingBottom: 5,
                borderBottom: "1px solid #ccc",
              }}
            >
              Liên hệ
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" style={{ margin: 10 }}>
              <Link href="#" style={{ color: "#ccc" }}>
                Chính sách
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" style={{ margin: 10 }}>
              <Link href="#" style={{ color: "#ccc" }}>
                Facebook
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
