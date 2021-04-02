import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Input,
  Link,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import DrawerMenu from "./DrawerMenu";

export default function FlexGrow() {
  const [isOpen, setIsOpen] = useState(false);

  const handMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Container fixed style={{ backgroundColor: "#212121" }}>
        <Box display="flex" p={1}>
          <Box p={1} flexGrow={1} style={{ alignSelf: "center" }}>
            <Typography
              variant="h5"
              style={{
                fontFamily: "serif",
                fontWeight: "bold",
                color: "#ccc",
              }}
            >
              Movie
              <span
                style={{
                  border: "1px solid white",
                  borderRadius: "10px",
                  backgroundColor: "#b13f3f",
                  color: "#E6E6E6",
                  padding: 5,
                  margin: 5,
                }}
              >
                APP
              </span>
            </Typography>
          </Box>
          <Box display="flex">
            <Button style={{ paddingRight: 0 }} onClick={() => handMenu()}>
              <Typography
                variant="h6"
                style={{ alignSelf: "center", color: "#ccc" }}
              >
                Danh Mục
              </Typography>
              <MenuIcon style={{ marginLeft: 10, color: "#ccc" }} />
            </Button>
          </Box>
        </Box>
      </Container>
      {isOpen && (
        <Container
          fixed
          style={{
            backgroundColor: "#212121",
            color: "#cccccc",
          }}
        >
          <DrawerMenu />
        </Container>
      )}

      <Container fixed style={{ backgroundColor: "#3e3e3e" }}>
        <Box p={1} display="flex">
          <Box flexGrow={1}>
            <form>
              <Input
                placeholder="Nhập tên phim"
                style={{
                  border: "1px solid black",
                  backgroundColor: "rgb(45 45 45)",
                  color: "rgb(249 249 223)",
                  paddingLeft: 5,
                }}
              />
            </form>
          </Box>
          <Box>
            <Button
              variant="outlined"
              style={{
                color: "#ccc",
                borderColor: "rgb(90 90 90)",
              }}
              href="#"
            >
              Đăng Nhập
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
