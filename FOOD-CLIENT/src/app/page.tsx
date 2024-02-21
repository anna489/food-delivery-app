"use client";
import * as React from "react";
import { Stack, Typography, Box, Container, Grid } from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import Sale from "@/components/Cards/Sale";
import Basic from "@/components/Cards/Basic";
import FoodCard from "@/components/Cards/Basic";
// import AppWidgetSummary from "./app-widget-summary";

export default function Home() {
  return (
    <Stack>
      <Box
        sx={{
          background: "#18BA51",
          gap: "300px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          height: "500px",
          backgroundImage: 'url("images/footerImage.svg")',
          padding: "300px",
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontWeight: 900,
              color: "white",
              fontSize: "60px",
            }}
          >
            Pinecone Food delivery
          </Typography>
          <Container
            sx={{
              backgroundColor: "white",
              width: "full",
              height: "1px ",
              marginTop: 10,
            }}
          ></Container>
          <Typography
            sx={{
              fontWeight: 900,
              color: "white",
              fontSize: "22px",
            }}
          >
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Stack>
        <Stack>
          <img src="./images/circleFood.png" alt="" />
        </Stack>
      </Box>

      <Sale />
      {/* <FoodCard /> */}
    </Stack>
  );
}
