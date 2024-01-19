"use client";

import * as React from "react";
import { Grid, Stack, TextField, Box, Container, Link } from "@mui/material";
import PineconeLogo from "../../../public/images/PineconeLogoBlack";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

const Nav = () => {
  const [value, setValue] = React.useState("recents");

  return (
    <main>
      <Box
        container
        spacing={2}
        sx={{
          flexGrow: 2,
          display: "flex",
          justifyContent: "space-around",
        }}
        mt={2}
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
              href="#"
              underline="none"
              sx={{ fontWeight: 900, fontSize: "20px" }}
            >
              {"Нүүр"}
            </Link>
            <Link
              href="#"
              underline="none"
              sx={{ fontWeight: 900, fontSize: "20px" }}
            >
              {"Хоолны цэс"}
            </Link>
            <Link
              href="#"
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
          <Link
            color="secondary"
            href="#"
            underline="none"
            sx={{
              fontWeight: 900,
              fontSize: "20px",
              alignItems: "center",
              display: "flex",
              gap: "10px",
            }}
          >
            <ShoppingBasketOutlinedIcon sx={{}} />
            Сагс
          </Link>
          {/* startIcon={<SearchIcon />} */}
          <Link
            color="secondary"
            href="#"
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
            Нэвтрэх
          </Link>
        </Grid>
      </Box>
    </main>
  );
};

export default Nav;
