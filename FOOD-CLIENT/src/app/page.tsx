"use client";
import * as React from "react";
import {
  Stack,
  Typography,
  Box,
  Container,
  Button,
  Grid,
  Link,
} from "@mui/material";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import Sale from "@/components/Card/Sale";
import Basic from "@/components/Card/Basic";

export default function Home() {
  const cards = [
    {
      icon: <ImportContactsIcon />,
      name: "Хүргэлтийн төлөв хянах",
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <AccessTimeIcon />,
      name: "Шуурхай хүргэлт",
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <RiceBowlIcon />,
      name: "Эрүүл, баталгаат орц",
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
    {
      icon: <ImportContactsIcon />,
      name: "Хоолны өргөн сонголт",
      description: "Захиалга бэлтгэлийн явцыг хянах",
    },
  ];

  return (
    <>
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "150px",
          marginTop: "100px",
        }}
      >
        {cards.map((card) => {
          return (
            <Stack>
              <Stack
                sx={{
                  color: "#18BA51",
                  padding: "30px",
                }}
              >
                {card.icon}
              </Stack>
              <Stack sx={{ border: "2px", fontSize: "20px", fontWeight: 600 }}>
                {card.name}
              </Stack>
              <Stack sx={{ border: "2px", color: "#272727" }}>
                {card.description}
              </Stack>
            </Stack>
          );
        })}
      </Box>

      <Sale />
      <Basic />
    </>
  );
}
