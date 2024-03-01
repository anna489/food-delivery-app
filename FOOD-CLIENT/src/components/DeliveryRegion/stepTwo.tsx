import { Box, Card, Checkbox, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FoodBasket } from "../FoodBasket";
import { ColorButton } from "@/theme/theme";
import { BasketContext } from "@/context/basketProvider";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";

const StepTwo = () => {
  const { baskets } = useContext(BasketContext);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
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
  );
};

export default StepTwo;
