"use client";

import {
  Box,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  List,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import React, { useContext } from "react";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { FoodBasket } from "../FoodBasket";
import { BasketContext } from "@/context/basketProvider";
import { ColorButton } from "@/theme/theme";

const DeliveryRegion = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [open, setOpen] = React.useState(false);
  const { baskets } = useContext(BasketContext);

  const districts = [
    {
      name: "  Баянзүрх дүүрэг",
    },
    {
      name: "Хан-Уул дүүрэг",
    },
    {
      name: " Баянгол дүүрэг",
    },
  ];

  const horoos = [
    {
      number: "1-р хороо",
    },
    {
      number: "2-р хороо",
    },
    {
      number: "3-р хороо",
    },
    {
      number: "4-р хороо",
    },
    {
      number: "5-р хороо",
    },
    {
      number: "6-р хороо",
    },
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <Grid>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Checkbox
            {...label}
            icon={<RadioButtonCheckedOutlinedIcon sx={{ fontSize: "50px" }} />}
            checkedIcon={
              <RadioButtonCheckedOutlinedIcon sx={{ fontSize: "50px" }} />
            }
          />
          <Box>
            <Typography>Алхам 1</Typography>
            <Typography sx={{ fontSize: "25px" }}>
              Хаягийн мэдээлэл оруулах
            </Typography>
            <Typography>Хүлээгдэж байна</Typography>
          </Box>
        </Box>
        <Card
          sx={{
            padding: "20px",
            marginTop: 5,
          }}
        >
          <Typography>Хаяг аа оруулна уу</Typography>
          <Box>
            <FormControl sx={{ m: 2, width: "400px" }}>
              <InputLabel
                id="demo-controlled-open-select-label"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocationOnOutlinedIcon />
                Дүүрэг сонгоно уу
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                label=" Дүүрэг сонгоно уу"
              >
                {districts.map((district) => (
                  <MenuItem value={district.name}>{district.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box>
            <FormControl sx={{ m: 2, width: "400px" }}>
              <InputLabel
                id="2"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocationOnOutlinedIcon />
                Хороо сонгоно уу
              </InputLabel>
              <Select
                labelId="2"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                label=" Дүүрэг сонгоно уу"
              >
                {horoos.map((horoo) => (
                  <MenuItem value={horoo.number}>{horoo.number}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box>
            <FormControl sx={{ m: 2, width: "400px" }}>
              <InputLabel
                id="demo-controlled-open-select-label"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LocationOnOutlinedIcon />
                Байр гудамж сонгоно уу
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                label=" Дүүрэг сонгоно уу"
              >
                {districts.map((district) => (
                  <MenuItem value={district.name}>{district.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Typography>Нэмэлт мэдээлэл</Typography>
            <TextField
              id="outlined-textarea"
              placeholder="Орц, давхар, орцны код ..."
              multiline
              sx={{ width: "400px", m: 2 }}
            />
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Typography>Утасны дугаар*</Typography>
            <TextField
              id="outlined-textarea"
              placeholder="Утасны дугаараа оруулна уу"
              multiline
              sx={{ width: "400px", m: 2 }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Бэлнээр"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Картаар"
            />
          </Box>
        </Card>
      </Grid>

      <Grid>
        <Box sx={{ display: "flex" }}>
          <Checkbox
            {...label}
            icon={<RadioButtonCheckedOutlinedIcon sx={{ fontSize: "50px" }} />}
            checkedIcon={
              <RadioButtonCheckedOutlinedIcon sx={{ fontSize: "50px" }} />
            }
          />

          <Box>
            <Typography>Алхам 2</Typography>
            <Typography sx={{ fontSize: "25px" }}>
              Захиалга баталгаажуулах
            </Typography>
            <Typography>Хүлээгдэж байна</Typography>
          </Box>
        </Box>
        <Card sx={{ padding: "30px", height: "550px", marginTop: 5 }}>
          <FoodBasket baskets={baskets} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              position: "sticky",
              padding: "20px",
            }}
          >
            <Typography sx={{ fontWeight: 600 }}>
              Нийт мөнгөн дүн:
              <span
                style={{ color: "red", paddingLeft: "10px", fontWeight: 600 }}
              ></span>
            </Typography>
            <ColorButton sx={{}}>ЗАХИАЛАХ</ColorButton>
          </Box>
        </Card>
      </Grid>
    </Container>
  );
};

export default DeliveryRegion;
