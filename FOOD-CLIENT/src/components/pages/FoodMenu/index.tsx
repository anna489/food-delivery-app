"use client";
import React from "react";
import { Container, Grid, Typography, Stack, Button } from "@mui/material";

const FoodMenu = () => {
  const menuCards = [
    { name: "Food" },
    { name: "Desert" },
    { name: "Lunch" },
    { name: "Drink" },
  ];
  return (
    <Stack
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Grid sx={{ display: "flex", gap: "150px" }}>
        {menuCards.map((e) => {
          return (
            <Button
              sx={{
                color: "white",
                height: "30px",
                width: "300px",
                border: "2px",
                borderRadius: "10px",
                padding: "20px",
                bgcolor: "#18BA51",
              }}
            >
              {e.name}
            </Button>
          );
        })}
      </Grid>
    </Stack>
  );
};

export default FoodMenu;
