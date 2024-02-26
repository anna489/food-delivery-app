import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import { FaChevronLeft } from "react-icons/fa";

import React, { useContext, useEffect } from "react";
import { FoodBasket } from "../FoodBasket";
import { foodContext } from "@/context/foodProvider";
import { BasketContext } from "@/context/basketProvider";

interface IDrawerProps {
  open: boolean;
  handleClose: () => void;
}

const MyDrawer = ({ handleClose, open }: IDrawerProps) => {
  const { getFoods, foods } = useContext(foodContext);
  const { baskets, loading, deleteBasket } = useContext(BasketContext);

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

            <FoodBasket foods={baskets} />
          </Box>
        </Drawer>
      </React.Fragment>
    </>
  );
};

export default MyDrawer;
