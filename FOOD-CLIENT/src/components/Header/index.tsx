"use client";

import * as React from "react";
import {
  Grid,
  Stack,
  TextField,
  Box,
  Container,
  Link,
  Button,
} from "@mui/material";
import PineconeLogo from "../../../public/images/PineconeLogoBlack";
import BottomNavigation from "@mui/material/BottomNavigation";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import RightDrawer from "@/components/RightDrawer";

type Props = {};

export default function Nav(props: Props) {
  const [value, setValue] = React.useState("recents");

  return (
    <main>
      <Grid
        container
        spacing={2}
        sx={{
          flexGrow: 2,
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Grid>
          <BottomNavigation
            showLabels
            sx={{
              width: 600,
              alignItems: "center",
              display: "flex",
              gap: "70px",
              justifyContent: "center",
            }}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <PineconeLogo />
            <Link
              href="/"
              underline="none"
              sx={{ fontWeight: 900, fontSize: "20px" }}
            >
              {"Нүүр"}
            </Link>
            <Link
              href="/foodmenu"
              underline="none"
              sx={{ fontWeight: 900, fontSize: "20px" }}
            >
              {"Хоолны цэс"}
            </Link>
            <Link
              href="deliveryregion"
              underline="none"
              sx={{ fontWeight: 900, fontSize: "20px" }}
            >
              {"Хүргэлтийн бүс"}
            </Link>
          </BottomNavigation>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Stack sx={{ alignItems: "center", display: "flex", border: "10px" }}>
            <TextField label="Хайх" size="small" />
          </Stack>
          <Button
            sx={{
              fontWeight: 900,
              fontSize: "19px",
              alignItems: "center",
              display: "flex",
              gap: "10px",
            }}
          >
            <ShoppingBasketOutlinedIcon />
            Сагс
          </Button>
          {/* <RightDrawer /> */}
          <Link
            color="secondary"
            href="userlogin"
            underline="none"
            sx={{
              fontWeight: 900,
              fontSize: "20px",
              alignItems: "center",
              display: "flex",
              gap: "10px",
            }}
          >
            <PersonOutlineOutlinedIcon sx={{}} />
            НЭВТРЭХ
          </Link>
        </Grid>
      </Grid>
    </main>
  );
}
