"use client";

import * as React from "react";
import {
  Stack,
  Box,
  Container,
  Item,
  Typography,
  Link,
  Grid,
} from "@mui/material";
import PineconeLogoWhite from "../../../public/images/PineconeLogoWhite";
import FooterImage from "../../../public/images/Footer/FooterImage";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#18BA51",
        width: "full",
        display: "flex",
        alignItems: "center",
        height: "500px",
        // backgroundImage: <FooterImage />,
      }}
    >
      <Container
        sx={{
          justifyContent: "center",
          gap: 5,
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
            alignItems: "center",
          }}
        >
          <PineconeLogoWhite />
          <Typography sx={{ fontSize: "25px", color: "white" }}>
            Food Delivery
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <Link sx={{ color: "white" }}>Нүүр</Link>
          <Link sx={{ color: "white" }}>Холбоо барих</Link>
          <Link sx={{ color: "white" }}>Хоолны цэс</Link>
          <Link sx={{ color: "white" }}>Үйлчилгээний нөхцөл</Link>
          <Link sx={{ color: "white" }}>Нууцлалын бодлого </Link>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center ",
            alignItems: "center",
            gap: "25px",
            marginTop: "30px",
          }}
        >
          <FacebookSharpIcon
            sx={{ color: "white", height: "50px", width: "50px" }}
          />
          <Instagram sx={{ color: "white", height: "50px", width: "50px" }} />
          <Twitter sx={{ color: "white", height: "50px", width: "50px" }} />
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
