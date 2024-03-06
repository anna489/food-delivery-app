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
import StepOne from "../pages/Order/stepOne";
import StepTwo from "../pages/Order/stepTwo";

const DeliveryRegion = () => {
  return (
    <Container
      sx={{
        display: "flex",

        alignItems: "center",
        marginTop: "50px",
        gap: "50px",
      }}
    >
      {/* <StepOne />
      <StepTwo /> */}
    </Container>
  );
};

export default DeliveryRegion;
