import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import { FaChevronLeft } from "react-icons/fa";

import React, { useContext, useEffect } from "react";
import { FoodBasket } from "../FoodBasket";
import { foodContext } from "@/context/foodProvider";
import { BasketContext } from "@/context/basketProvider";
import { ColorButton } from "@/theme/theme";

interface IDrawerProps {
  open: boolean;
  handleClose: () => void;
}

const MyDrawer = ({ handleClose, open }: IDrawerProps) => {
  const { getFoods, foods } = useContext(foodContext);
  const { baskets, totalPrice } = useContext(BasketContext);
  console.log("BASKET FOOOD=======>");
  useEffect(() => {
    getFoods();
  }, []);

  return (
    <>
      <React.Fragment>
        <Drawer open={open} onClose={handleClose} anchor="right">
          <Box width={584} p={5}>
            <Box
              pb={5}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <FaChevronLeft />
              <Typography fontWeight={600}>Таны сагс</Typography>
              <Typography></Typography>
            </Box>
            <Divider />
            <FoodBasket baskets={baskets} />
          </Box>
          <Box
            sx={{
              position: "sticky",
              bottom: "0",
              display: "flex",
              justifyContent: "space-around",
              bgcolor: "white",
              padding: "20px",
              boxShadow: "inherit",
            }}
          >
            <Typography>
              Нийт төлөх дүн:{" "}
              <span
                style={{ color: "red", paddingLeft: "10px", fontWeight: 600 }}
              >
                {totalPrice} ₮
              </span>
            </Typography>
            <ColorButton variant="contained" href="order">
              ЗАХИАЛАХ
            </ColorButton>
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default MyDrawer;
