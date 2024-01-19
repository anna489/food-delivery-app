"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container, Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CardModals() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
            width: "900px",
            borderRadius: "30px",
          }}
        >
          <Container
            sx={{ display: "flex", gap: 5, margin: "40px", width: "800px" }}
          >
            <Grid>
              <img
                src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                alt=""
                style={{ height: 400, width: 400, borderRadius: "20px" }}
              />
            </Grid>
            <Grid sx={{ margin: "20px" }}>
              <Typography sx={{ fontSize: "25px", fontWeight: 700 }}>
                Main Pizza
              </Typography>
              <Typography sx={{ fontWeight: 700, color: "#18BA51" }}>
                38,000₮
              </Typography>
              <Typography
                sx={{ fontSize: "18px", fontWeight: 700, marginTop: "50px" }}
              >
                Орц
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#767676",
                  bgcolor: "#F6F6F6",
                  borderRadius: "10px",
                  padding: "10px",
                  marginTop: "20px",
                }}
              >
                Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
              </Typography>
              <Typography
                sx={{ fontSize: "18px", fontWeight: 700, marginTop: "20px" }}
              >
                Тоо
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "20px",
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
              <Button
                sx={{
                  color: "white",
                  bgcolor: "#18BA51",
                  fontWeight: 900,
                  width: "100%",
                  padding: "15px",
                  marginTop: "10px",
                }}
              >
                Сагслах
              </Button>
            </Grid>
          </Container>
        </Box>
      </Modal>
    </Container>
  );
}
