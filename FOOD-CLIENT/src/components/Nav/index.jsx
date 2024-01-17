"use client";

import * as React from "react";
import {
  Grid,
  Button,
  Typography,
  Stack,
  TextField,
  Input,
  Box,
  Container,
} from "@mui/material";
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
            sx={{ width: 500, alignItems: "center", display: "flex" }}
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <PineconeLogo />
            <BottomNavigationAction
              label="Нүүр"
              sx={{ fontWeight: 900 }}
              color="secondary"
            />
            <BottomNavigationAction
              label="Хоолны цэс"
              sx={{ fontWeight: 900 }}
            />
            <BottomNavigationAction
              label="Хүргэлтийн бүс"
              sx={{ fontWeight: 900 }}
            />
          </BottomNavigation>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            // justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Stack sx={{ alignItems: "center", display: "flex", border: "10px" }}>
            <TextField label="Хайх" size="small" />
          </Stack>
          <Button color="secondary">
            <ShoppingBasketOutlinedIcon sx={{}} />
            Сагс
          </Button>
          {/* startIcon={<SearchIcon />} */}
          <Button color="secondary" sx={{ gap: "2px" }}>
            <PersonOutlineOutlinedIcon sx={{}} />
            Нэвтрэх
          </Button>
        </Grid>
      </Box>
    </main>
  );
};

export default Nav;
