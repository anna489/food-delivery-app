import { Input } from "@/components/core/Input";
import { UserContext } from "@/context/UserProvider";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";

const khoroos = [
  "1-р хороо",
  "2-р хороо",
  "3-р хороо",
  "4-р хороо",
  "5-р хороо",
  "6-р хороо",
  "7-р хороо",
];
const duurguud = [
  "Баянзүрх дүүрэг",
  "Хан-Уул дүүрэг",
  "Баянгол дүүрэг",
  "Сонгинохайрхан дүүрэг",
  "Чингэлтэй дүүрэг",
];
const buildings = [
  "Нархан хотхон",
  "26-р байр",
  "Хоймор хотхон",
  "45-р байр",
  "Зайсан хотхон ",
];

export const StepOne = ({ formik }: any) => {
  const { userForm } = useContext(UserContext);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Grid sx={{ width: "500px" }}>
      <Box sx={{ display: "flex", height: "100px" }}>
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
      <Stack boxShadow={3} gap={10} p={5} borderRadius={2}>
        <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
          <Typography>Хаяг аа оруулна уу</Typography>
          <Stack>
            <Select
              value={formik.values.duureg}
              onChange={formik.handleChange}
              name="duureg"
              sx={{ bgcolor: "#ECEDF0" }}
            >
              <MenuItem disabled value="">
                <em>Дүүрэг сонгоно уу</em>
              </MenuItem>
              {duurguud.map((duureg) => (
                <MenuItem key={duureg} value={duureg}>
                  {duureg}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText sx={{ color: "red" }}>
              {formik.errors.duureg}
            </FormHelperText>
          </Stack>
          <Stack>
            <Select
              value={formik.values.khoroo}
              onChange={formik.handleChange}
              name="khoroo"
              sx={{ bgcolor: "#ECEDF0" }}
            >
              <MenuItem disabled value="">
                <em>Хороо сонгоно уу</em>
              </MenuItem>
              {khoroos.map((khoroo) => (
                <MenuItem key={khoroo} value={khoroo}>
                  {khoroo}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText sx={{ color: "red" }}>
              {formik.errors.khoroo}
            </FormHelperText>
          </Stack>
          <Stack>
            <Select
              value={formik.values.buildingNo}
              onChange={formik.handleChange}
              name="buildingNo"
              sx={{ bgcolor: "#ECEDF0" }}
            >
              <MenuItem disabled value="">
                <em>Байр гудамж сонгоно уу</em>
              </MenuItem>
              {buildings.map((building) => (
                <MenuItem key={building} value={building}>
                  {building}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText sx={{ color: "red" }}>
              {formik.errors.buildingNo}
            </FormHelperText>
          </Stack>
        </div>

        <Input
          label="Нэмэлт мэдээлэл"
          name="info"
          value={formik.values.info}
          onChange={formik.handleChange}
          errorText={formik.errors.info}
        />
        <Input
          value={formik.values.phone}
          onChange={formik.handleChange}
          name="phone"
          errorText={formik.errors.phone}
          label="Утасны дугаар*"
        />
        <div>
          <FormControl>
            <FormLabel
              id="demo-radio-buttons-group-label"
              sx={{ fontSize: "18px" }}
            >
              Төлбөр төлөх
            </FormLabel>
            <RadioGroup
              sx={{ display: "flex", flexDirection: "row" }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Cash"
              name="method"
              value={formik.values.method}
              onChange={formik.handleChange}
            >
              <FormControlLabel value="Cash" control={<Radio />} label="Cash" />
              <FormControlLabel value="Card" control={<Radio />} label="Card" />
              <FormControlLabel value="Qpay" control={<Radio />} label="Qpay" />
            </RadioGroup>
          </FormControl>
          <FormHelperText sx={{ color: "red" }}>
            {formik.errors.method}
          </FormHelperText>
        </div>
      </Stack>
    </Grid>
  );
};
