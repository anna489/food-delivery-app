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
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useRouter } from "next/navigation";

type Props = {};

const LoginPage = (props: Props) => {
  const router = useRouter();
  const handleSignUpClick = () => {
    router.push("/signup");
  };

  const handleStepOneClick = () => {
    router.push("/passrestore/stepone");
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
      <Container sx={{ padding: "100px" }}>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 700,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          Нэвтрэх
        </Typography>
        <Stack
          sx={{
            display: "flex",
            border: "10px",
            justifyContent: "start",
            marginTop: "30px",
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>Имэйл</Typography>
          <TextField
            label="Имэйл хаягаа оруулна уу"
            size="medium"
            sx={{ width: "400px", marginTop: "10px" }}
          />
        </Stack>
        <Stack
          sx={{
            display: "flex",
            border: "10px",

            marginTop: "30px",
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>Нууц үг</Typography>

          <FormControl sx={{ marginTop: "10px" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Нууц үг
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

          <Button
            sx={{
              fontWeight: 400,
              display: "flex",
              justifyContent: "end",
              color: "black",
              fontSize: "12px",
            }}
            href="/pass-restore"
          >
            Нууц үг сэргээх
          </Button>
        </Stack>
        <Stack>
          <Button
            sx={{
              borderRadius: "4px",
              bgcolor: "#18BA51",
              color: "white",
              marginTop: "40px",
              padding: "15px",
            }}
            variant="outlined"
          >
            Нэвтрэх
          </Button>
        </Stack>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            padding: "40px",
          }}
        >
          Эсвэл
        </Typography>
        <Stack>
          <Button
            sx={{
              borderRadius: "4px",
              color: "black",
              padding: "15px",
              bgcolor: "white",
            }}
            variant="outlined"
            onClick={handleSignUpClick}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default LoginPage;
