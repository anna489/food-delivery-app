import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import FoodCard from "./food-card";
import { foodContext } from "@/context/foodProvider";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CardModals from "../CardModals";
const CategoryCard = ({ category }: any) => {
  const { foods, getFoods } = useContext(foodContext);

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <AutoAwesomeRoundedIcon sx={{ color: "#18BA51 " }} />
          {category.name}
        </Typography>
        <Link
          underline="none"
          sx={{ alignItems: "center", display: "flex", fontSize: "20px" }}
        >
          Бүгдийг харах <KeyboardArrowRightIcon />
        </Link>
      </Box>
      <Grid sx={{ display: "flex", gap: "40px" }}>
        {foods
          ?.filter((food: any) => food.category === category._id)
          ?.map((food: any) => (
            <Box key={food.category._id}>
              <Link>
                <FoodCard food={food} />
              </Link>
            </Box>
          ))}
      </Grid>
    </Container>
  );
};

export default CategoryCard;
