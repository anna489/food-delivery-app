"use client";

import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Container, Grid, Stack, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { BasketContext } from "@/context/basketProvider";

interface IFoodModal {
  open: any;
  handleClose: () => void;
  food: any;
}

export default function FoodModal({ open, handleClose, food }: IFoodModal) {
  const { image, name, createdAt, isSale, _id, description, price } = food;

  const { addBasket, loading } = React.useContext(BasketContext);
  const [count, setCount] = React.useState(1);
  const HandleSendFood = () => {
    addBasket(food, count);
    handleClose();
  };

  const router = useRouter();

  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "white",
            display: "flex",
            gap: "20px",
            alignItems: "center",
            borderRadius: "30px",
            justifyContent: "space-around",
            padding: "30px",
          }}
        >
          <Stack>
            <img
              src={image}
              style={{ height: 400, width: 500, borderRadius: "20px" }}
            />
          </Stack>
          <Stack sx={{ width: "300px" }}>
            <Typography sx={{ fontSize: "35px", fontWeight: 700 }}>
              {name}
            </Typography>
            <Typography
              sx={{ fontWeight: 700, color: "#18BA51", fontSize: "20px" }}
            >
              {price}₮
            </Typography>
            <Typography
              sx={{ fontSize: "18px", fontWeight: 700, marginTop: "15px" }}
            >
              Орц
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: 700,
                color: "#767676",
                bgcolor: "#F6F6F6",
                borderRadius: "10px",
                padding: "10px",
                marginTop: "15px",
              }}
            >
              {description}
            </Typography>
            <Stack>
              <Typography
                sx={{ fontSize: "18px", fontWeight: 700, marginTop: "15px" }}
              >
                Тоо
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <Button
                  sx={{
                    color: "white",
                    bgcolor: "#18BA51",
                    fontWeight: 900,
                  }}
                  onClick={() => setCount((count) => count - 1)}
                >
                  -
                </Button>
                <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                  {count}
                </Typography>
                <Button
                  sx={{
                    color: "white",
                    bgcolor: "#18BA51",
                    fontWeight: 900,
                  }}
                  onClick={() => setCount((count) => count + 1)}
                >
                  +
                </Button>
              </Box>
              <Button
                sx={{
                  color: "white",
                  bgcolor: "#18BA51",
                  fontWeight: 900,
                  width: "100%",
                  padding: "15px",
                  marginTop: "10px",
                }}
                onClick={() => HandleSendFood()}
              >
                Сагслах
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </Container>
  );
}
