"use client";

import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Grid, Typography, Container } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

type Anchor = "right";

export default function Right() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            sx={{
              fontWeight: 900,
              fontSize: "19px",
              alignItems: "center",
              display: "flex",
              gap: "10px",
              color: "black",
            }}
          >
            <ShoppingBasketOutlinedIcon />
            {anchor}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center ",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  marginTop: "20px",
                }}
              >
                Таны сагс
              </Typography>
            </Grid>
            <Container sx={{ display: "flex", marginTop: "40px" }}>
              <Grid>
                <img
                  src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                  alt=""
                  style={{ height: 200, width: 300, borderRadius: "10px" }}
                />
              </Grid>
              <Grid sx={{ margin: "5px" }}>
                <Typography sx={{ fontSize: "25px", fontWeight: 600 }}>
                  Main Pizza
                </Typography>
                <Typography sx={{ fontWeight: 600, color: "#18BA51" }}>
                  38,000₮
                </Typography>
                <Typography
                  sx={{ fontSize: "18px", fontWeight: 700, marginTop: "10px" }}
                >
                  Орц
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#767676",

                    borderRadius: "10px",
                  }}
                >
                  Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
                </Typography>
                <Typography
                  sx={{ fontSize: "18px", fontWeight: 700, marginTop: "10px" }}
                >
                  Тоо
                </Typography>
                <Grid
                  sx={{
                    display: "flex",

                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      color: "white",
                      bgcolor: "#18BA51",
                      fontWeight: 900,
                    }}
                  >
                    -
                  </Button>
                  <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                    1
                  </Typography>
                  <Button
                    sx={{
                      color: "white",
                      bgcolor: "#18BA51",
                      fontWeight: 900,
                    }}
                  >
                    +
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
