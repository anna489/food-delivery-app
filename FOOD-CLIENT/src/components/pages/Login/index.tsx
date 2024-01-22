import React from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Container,
  Button,
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";

type Props = {};

const LoginPage = (props: Props) => {
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
          <TextField
            id="input-with-icon-textfield"
            label="Нууц үгээ оруулна уу"
            size="medium"
            sx={{ width: "400px", marginTop: "10px" }}
            inputProps={{
              startAdornment: (
                <InputAdornment position="end">
                  <VisibilityOffIcon
                    sx={{ color: "#000000", height: "20px", width: "20px" }}
                  />
                </InputAdornment>
              ),
            }}
          />

          <Typography
            sx={{
              fontWeight: 500,
              display: "flex",
              justifyContent: "end",
              margin: "5px",
            }}
          >
            Нууц үг сэргээх
          </Typography>
        </Stack>
        <Stack>
          <Button
            sx={{
              borderRadius: "4px",
              bgcolor: "#EEEFF2",
              color: "#1C20243D",
              marginTop: "20px",
              padding: "15px",
            }}
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
              borderColor: "#18BA51",
              color: "black",
              bgcolor: "#18BA51",
              padding: "15px",
            }}
          >
            Бүртгүүлэх
          </Button>
        </Stack>
      </Container>
    </div>
  );
};

export default LoginPage;
