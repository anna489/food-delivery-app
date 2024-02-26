"use client";

import React, { useEffect } from "react";
import { catContext } from "@/context/catProvider";
import { useContext } from "react";
import { Box, Button, Container, Grid, Stack } from "@mui/material";
import CategoryCard from "@/components/Category/category-card";
import CategoryButton from "./categoryButton";

export const FoodMenu = () => {
  const { getCategories, categories } = useContext(catContext);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Stack>
      <Container
        sx={{
          display: "flex",
          gap: "30px",
        }}
      >
        {categories?.map((category: any) => (
          <CategoryButton category={category} />
        ))}
      </Container>

      {categories?.map((category: any) => (
        <CategoryCard category={category} />
      ))}
    </Stack>
  );
};
