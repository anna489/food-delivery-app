import React from "react";
import {
  Stack,
  Box,
  Container,
  Typography,
  TextField,
  Link,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CreateIcon from "@mui/icons-material/Create";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";

const UserLogin = () => {
  const userInformation = [
    {
      name: "Anar",
      image:
        "https://i.pinimg.com/736x/a7/09/d6/a709d6525d714d3436d5932f079d3850.jpg",
      phoneNumber: "99597575",
      email: "anar.gb2020@gmail.com",
    },
  ];

  return (
    <div style={{ padding: "50px" }}>
      {userInformation.map((e) => {
        return (
          <Container sx={{}}>
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <img
                src={e.image}
                style={{
                  height: "250px",
                  width: "250px",
                  borderRadius: "200px",
                }}
              />
            </Box>
            <Typography
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                fontWeight: 900,
                fontSize: "30px",
                padding: "30px",
              }}
            >
              {e.name}
            </Typography>
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                gap: "20px",
                padding: "10px",
              }}
            >
              <PersonIcon />
              <TextField
                label="Таны нэр"
                id="standard-size-small"
                defaultValue={e.name}
                variant="standard"
                sx={{ width: "200px" }}
              />
              <CreateIcon />
            </Box>
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                gap: "20px",
                padding: "10px",
              }}
            >
              <PhoneIcon />
              <TextField
                label="Таны дугаар"
                id="standard-size-small"
                defaultValue={e.phoneNumber}
                variant="standard"
                sx={{ width: "200px" }}
              />
              <CreateIcon />
            </Box>
            <Box
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                gap: "20px",
                padding: "10px",
              }}
            >
              <MailOutlineIcon />
              <TextField
                label="Таны нэр"
                id="standard-size-small"
                defaultValue={e.email}
                variant="standard"
                sx={{ width: "200px" }}
              />
              <CreateIcon />
            </Box>
            <Box
              sx={{
                justifyContent: " center",
                alignItems: "center",
                display: "flex",
                gap: "30px",

                marginTop: "30px",
              }}
            >
              <HistoryIcon />
              <Link
                href="/"
                underline="none"
                sx={{ fontSize: "15px", color: "black" }}
              >
                Захиалгын түүх
              </Link>
            </Box>
            <Box
              sx={{
                justifyContent: " center",
                alignItems: "center",
                display: "flex",
                gap: "30px",
                padding: "10px",
              }}
            >
              <LogoutIcon />
              <Link
                href="/"
                underline="none"
                sx={{ fontSize: "15px", color: "black" }}
              >
                Гарах
              </Link>
            </Box>
          </Container>
        );
      })}
    </div>
  );
};

export default UserLogin;
