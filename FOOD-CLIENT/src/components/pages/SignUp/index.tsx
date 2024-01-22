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
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

type Props = {};

const SignUpPage = (props: Props) => {
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
        </Stack>
        <Stack
          sx={{
            display: "flex",
            border: "10px",

            marginTop: "30px",
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>Нууц үг давтах</Typography>
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
              bgcolor: "#EEEFF2",
              color: "#1C20243D",
              marginTop: "20px",
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

export default SignUpPage;
