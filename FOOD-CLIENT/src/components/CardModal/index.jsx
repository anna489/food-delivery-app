"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{}}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",

            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent
          dividers
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
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
