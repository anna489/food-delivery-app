"use client";
import {
  Box,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import React, { useContext } from "react";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { FoodBasket } from "../FoodBasket";
import { BasketContext } from "@/context/basketProvider";
import { ColorButton } from "@/theme/theme";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";

const DeliveryRegion = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [open, setOpen] = React.useState(false);
  const { baskets } = useContext(BasketContext);

  const districts = [" Баянзүрх дүүрэг", "Хан-Уул дүүрэг", " Баянгол дүүрэг"];

  const horoos = [
    "1-р хороо",
    "2-р хороо",
    "3-р хороо",
    "4-р хороо",
    "5-р хороо",
    "6-р хороо",
  ];

  const buildings = [
    "Нархан хотхон",
    "26-р байр",
    "Хоймор хотхон",
    "45-р байр",
    "Зайсан хотхон ",
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container
      sx={{
        display: "flex",

        alignItems: "center",
        marginTop: "50px",
        gap: "50px",
      }}
    >
      <StepOne />
      <StepTwo />
    </Container>
  );
};

export default DeliveryRegion;
