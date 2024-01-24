"use client";

import React from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Container,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useRouter } from "next/navigation";

type Props = {};

const StepTwo = (props: Props) => {
  const router = useRouter();
  const handleStepThreeClick = () => {
    router.push("/passrestore/stepthree");
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
          <FormControl sx={{ mt: "20px  " }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              ********
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
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
