import { Box, Card, Checkbox, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FoodBasket } from "@/components/FoodBasket";
import { ColorButton } from "@/theme/theme";
import { BasketContext } from "@/context/basketProvider";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import { useRouter } from "next/navigation";
type Props = {
  formik: any;
};

export const StepTwo = ({ formik }: Props) => {
  const { baskets, totalPrice } = useContext(BasketContext);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const router = useRouter();
  return (
    <Grid>
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

      <Card
        sx={{
          boxShadow: 3,
          height: "720px",
          overflow: "auto",
        }}
      >
        <FoodBasket baskets={baskets} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            position: "sticky",
            alignItems: "center",
            padding: "20px",
            bottom: 0,
            bgcolor: "white",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            Нийт мөнгөн дүн:
            <span
              style={{ color: "red", paddingLeft: "10px", fontWeight: 600 }}
            >
              {totalPrice}₮
            </span>
          </Typography>
          <ColorButton onClick={formik.handleSubmit}>ЗАХИАЛАХ</ColorButton>
        </Box>
      </Card>
    </Grid>
  );
};
