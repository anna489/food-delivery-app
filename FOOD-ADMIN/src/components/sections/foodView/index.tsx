"use client";

import { ChangeEvent, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import FoodCard from "./food-card";
import FoodSort from "./food-sort";

// ----------------------------------------------------------------------
import { Button } from "@mui/material";
import Iconify from "@/components/iconify";

import FoodModal from "@/components/foodModal";
// ----------------------------------------------------------------------

export default function FoodView() {
  const [open, setOpen] = useState(false);
  const [foods, setFoods] = useState([]);
  const [file, setFile] = useState<File | null>(null);

  const [newFood, setNewFood] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewFood({ ...newFood, [name]: value });
  };

  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  const createFood = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      formData.set("name", newFood.name);
      formData.set("description", newFood.description);

      const {
        data: { food },
      } = (await axios.post("http://localhost:8080/food", formData)) as {
        data: { food: object };
      };

      // setCategories(categories);
      console.log("Success Add Food");
    } catch (error: any) {
      alert("Add Error - " + error.message);
    }
  };

  const getFood = async () => {
    try {
      const {
        data: { foods },
      } = (await axios.get("http://localhost:8080/food")) as {
        data: { foods: [] };
      };

      setFoods(foods);
    } catch (error: any) {
      alert("Get Error - " + error.message);
    }
  };

  useEffect(() => {
    getFood();
  }, [createFood]);

  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4" sx={{ mb: 5 }}>
          Хоолны жагсаалт
        </Typography>
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            setOpenFilter(true);
          }}
        >
          Шинэ хоол
        </Button>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          <FoodSort />
        </Stack>
      </Stack>
      <Grid container spacing={3}>
        {foods.map((product: any) => (
          <Grid key={product.id} xs={12} sm={6} md={3}>
            <FoodCard product={product} />
          </Grid>
        ))}
      </Grid>
      <FoodModal
        open={open}
        newFood={newFood}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
        handleSave={createFood}
        openFilter={openFilter}
        handleCloseFilter={handleCloseFilter}
      ></FoodModal>
    </Container>
  );
}
