"use client";

import React from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Container,
  Button,
} from "@mui/material";

import { useRouter } from "next/navigation";

type Props = {};

const StepTwo = (props: Props) => {
  const router = useRouter();
  const handleStepThreeClick = () => {
    router.push("/passrestore/stepthree");
  };

  return (
    <div>
      <Container sx={{ padding: "100px", width: "425px" }}>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 700,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Нууц үг сэргээх
        </Typography>
        <Typography sx={{ marginTop: "50px" }}>
          Таны
          <span style={{ marginLeft: "5px", color: "#18BA51" }}>
            example@pinecone.mn{" "}
          </span>
          хаяг руу сэргээх код илгээх болно.
        </Typography>
        <Stack
          sx={{
            display: "flex",
            border: "10px",
            justifyContent: "start",
            marginTop: "30px",
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>Нууц үг сэргээх код</Typography>
          <TextField
            label="****"
            size="medium"
            sx={{ width: "400px", marginTop: "10px" }}
          />
        </Stack>

        <Stack>
          <Button
            sx={{
              borderRadius: "4px",
              color: "white",
              padding: "15px",
              bgcolor: "#18BA51",
              marginTop: "50px",
            }}
            variant="outlined"
            onClick={handleStepThreeClick}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default StepTwo;
