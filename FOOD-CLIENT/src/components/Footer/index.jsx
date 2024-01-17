"use client";

import * as React from "react";
import Image from "next/image";
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
// import FooterImage from "../../../public/images/Footer/FooterImage";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Stack
      // width={"100vw"}
      sx={{
        background: "#18BA51",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        height: "600px",
        backgroundImage: 'url("images/footerImage.svg")',
      }}
    >
      {/* <Image alt="" src="/images/footerImage.svg" fill="true" /> */}
      <Container
        sx={{
          justifyContent: "center",
          gap: 5,
          alignItems: "center",
        }}
      >
        <Container
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
        </Container>
        <Container
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
        </Container>
        <Container
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
        </Container>
        <Container
          sx={{
            backgroundColor: "white",
            width: "full",
            height: "1px ",
            marginTop: 10,
          }}
        ></Container>
        <Container
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Stack sx={{ alignItems: "center" }}>
            <Typography sx={{ fontSize: "15px", color: "white" }}>
              © 2024 Pinecone Foods LLC
            </Typography>
            <Typography sx={{ fontSize: "15px", color: "white" }}>
              Зохиогчийн эрх хуулиар хамгаалагдсан.
            </Typography>
          </Stack>
        </Container>
      </Container>
    </Stack>
  );
};

export default Footer;
