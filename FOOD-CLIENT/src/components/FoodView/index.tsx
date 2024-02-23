"use client";
import * as React from "react";
import { Stack, Typography, Box, Container, Grid } from "@mui/material";

export default function FoodView() {
  return (
    <Stack>
      <Box
        sx={{
          background: "#18BA51",
          gap: "100px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          height: "500px",
          backgroundImage: 'url("images/footerImage.svg")',
          padding: "300px",
        }}
      >
        <Stack>
          <Container>
            <Typography
              sx={{
                fontWeight: 900,
                color: "white",
                fontSize: "60px",
              }}
            >
              Pinecone Food <br />
              delivery
            </Typography>
            {/* <Container
              sx={{
                backgroundColor: "white",
                width: "full",
                height: "1px ",
                marginTop: 10,
              }}
            ></Container> */}
            <Typography
              sx={{
                fontWeight: 900,
                color: "white",
                fontSize: "22px",
              }}
            >
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Container>
        </Stack>
        <Stack>
          <img src="./images/circleFood.png" alt="" />
        </Stack>
      </Box>
    </Stack>
  );
}
