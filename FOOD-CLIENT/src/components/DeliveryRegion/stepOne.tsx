import { BasketContext } from "@/context/basketProvider";
import {
  Box,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputBase,
  InputBaseClassKey,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";

const StepOne = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [open, setOpen] = React.useState(false);
  const { baskets } = useContext(BasketContext);

  const districts = [" Баянзүрх дүүрэг", "Хан-Уул дүүрэг", " Баянгол дүүрэг"];

  const horoos = [
    "1-р хороо",
    "2-р хороо",
    "3-р хороо",
    "4-р хороо",
    "5-р хороо",
    "6-р хороо",
  ];

  const buildings = [
    "Нархан хотхон",
    "26-р байр",
    "Хоймор хотхон",
    "45-р байр",
    "Зайсан хотхон ",
  ];

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
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
          <Select
            sx={{ bgcolor: "#FAFAFA", width: "400px", m: 2, color: "black" }}
          >
            <MenuItem disabled value="">
              <em>Дүүрэг сонгоно уу</em>
            </MenuItem>
            {districts.map((district) => (
              <MenuItem key={district} value={district}>
                {district}
              </MenuItem>
            ))}
          </Select>

          <Select sx={{ bgcolor: "#FAFAFA", width: "400px", m: 2 }}>
            <MenuItem disabled value="">
              <em>Хороо сонгоно уу</em>
            </MenuItem>
            {horoos.map((horoo) => (
              <MenuItem key={horoo} value={horoo}>
                {horoo}
              </MenuItem>
            ))}
          </Select>
          <Select sx={{ bgcolor: "#FAFAFA", width: "400px", m: 2 }}>
            <MenuItem disabled value="">
              <em>Байр гудамж сонгоно уу</em>
            </MenuItem>
            {buildings.map((building) => (
              <MenuItem key={building} value={building}>
                {building}
              </MenuItem>
            ))}
          </Select>
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
  );
};

export default StepOne;
