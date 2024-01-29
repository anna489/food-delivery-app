"use client";

import React from "react";
import {
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
import InputAdornment from "@mui/material/InputAdornment";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { useRouter } from "next/navigation";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { object, string } from "yup";

type Props = {};

const SignUpPage = (props: Props) => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/login");
  };

  const [showPassword, setShowPassword] = React.useState(true);

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
          Бүртгүүлэх
        </Typography>
        <Stack
          sx={{
            display: "flex",
            border: "10px",
            justifyContent: "start",
            marginTop: "30px",
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>Нэр</Typography>
          <TextField
            label="Нэрээ оруулна уу"
            size="medium"
            sx={{ width: "400px", marginTop: "10px" }}
          />
        </Stack>
        <Stack
          sx={{
            display: "flex",
            border: "10px",
            justifyContent: "start",
            marginTop: "30px",
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>И-мэйл</Typography>
          <TextField
            label="И-мэйл хаягаа оруулна уу"
            size="medium"
            sx={{ width: "400px", marginTop: "10px" }}
          />
        </Stack>
        <Stack
          sx={{
            display: "flex",
            border: "10px",
            justifyContent: "start",
            marginTop: "30px",
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>Хаяг</Typography>
          <TextField
            label=" Та хаягаа оруулна уу"
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

          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Нууц үгээ оруулна уу
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
        <Stack
          sx={{
            display: "flex",
            border: "10px",

            marginTop: "30px",
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>Нууц үг давтах</Typography>
          <FormControl sx={{ m: 1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Нууц үгээ оруулна уу
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
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "40px",
          }}
        >
          <CloudQueueIcon />
          Үйлчилгээний нөхцөл зөвшөөрөх
        </Typography>
        <Stack>
          <Button
            sx={{
              borderRadius: "4px",
              bgcolor: "#18BA51",
              color: "white",
              marginTop: "20px",
              padding: "15px",
            }}
            variant="outlined"
          >
            Бүртгүүлэх
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
            onClick={handleLoginClick}
          >
            Нэвтрэх
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default SignUpPage;
