import React, { useEffect } from "react";
import { catContext } from "@/context/catProvider";
import { useContext } from "react";
import { Container, Grid, Stack } from "@mui/material";
import CategoryCard from "./category-card";
export const Category = () => {
  const { getCategories, categories } = useContext(catContext);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Stack sx={{ display: "flex", justifyContent: "center" }}>
      {categories?.map((category: any) => (
        <CategoryCard category={category} />
      ))}
    </Stack>
  );
};
