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
const CategoryCard = ({ category }: any) => {
  const { name } = category;
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
          {name}
        </Typography>
        <Link
          underline="none"
          sx={{ alignItems: "center", display: "flex", fontSize: "20px" }}
        >
          Бүгдийг харах <KeyboardArrowRightIcon />
        </Link>
      </Box>
      <Grid sx={{ display: "flex", gap: "40px" }}>
        {foods?.map((food: any) => (
          <FoodCard food={food} />
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryCard;
