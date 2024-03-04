"use client";
import { BasketContext } from "@/context/basketProvider";
import { Add, Close, Remove } from "@mui/icons-material";
import {
  Grid,
  Typography,
  Button as MuiButton,
  Box,
  Stack,
  Button,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

type Props = {
  image: string;
  _id: String;
  name: string;
  description: string;
  price: number;
  count: number;
};

export const FoodBasket = ({ baskets }: any) => {
  const { deleteBasket } = useContext(BasketContext);
  const [count, setCount] = useState();

  const handleDelete = (id: any) => {
    deleteBasket(id);
  };

  return (
    <Box sx={{ width: "550px" }}>
      {baskets.map((basket: any) => (
        <Grid container key={basket._id} p={2} py={6}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              alt="basketFood img"
              width={250}
              height={170}
              style={{ borderRadius: "10px" }}
              src={basket?.food?.image}
            />
          </Grid>

          <Grid item xs={6}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography sx={{ fontSize: "28px" }} fontWeight={600}>
                  {basket?.food?.name}
                </Typography>

                <Typography
                  fontWeight={600}
                  py={2}
                  sx={{ color: "#18BA51", fontSize: "18px", display: "flex" }}
                >
                  {basket?.food?.price} * {basket?.count}
                </Typography>
              </Box>
              <MuiButton
                sx={{ height: "20px", width: "20px", color: "red" }}
                onClick={() => handleDelete(basket._id)}
              >
                <Close />
              </MuiButton>
            </Box>

            <Typography
              sx={{
                display: "flex",
                padding: "5px",
                textAlign: "left",
                color: "#767676",
                bgcolor: "#F6F6F6",
                fontWeight: 600,
              }}
            >
              {basket?.food?.description}
            </Typography>

            <Typography sx={{ marginTop: "10px", fontWeight: 600 }}>
              Нийт мөнгөн дүн:
              <span
                style={{ color: "red", paddingLeft: "10px", fontWeight: 600 }}
              >
                {basket?.food?.price * basket.count} ₮
              </span>
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};
