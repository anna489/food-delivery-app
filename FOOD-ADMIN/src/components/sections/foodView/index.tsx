"use client";

import { ChangeEvent, useContext, useEffect, useState } from "react";
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
import { catContext } from "@/context/catProvider";
import { foodContext } from "@/context/foodProvider";

import { redirect } from "next/navigation";
import { authContext } from "@/context/authProvider";
// ----------------------------------------------------------------------

export default function FoodView() {
  const { checkIsLogged } = useContext(authContext);
  // const { getFoods, foods, loading } = useContext(foodContext);

  useEffect(() => {
    checkIsLogged();
    getFoods();
    if (!localStorage.getItem("token")) {
      console.log("USER NOT FOUND");
      redirect("/login");
    }
  }, []);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const {
    foods,
    isLoading,
    getFoods,
    uploadImage,
    handleFile,
    handleFoodForm,
  } = useContext(foodContext);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(() => false);
  };
  const handleSave = async () => {
    await uploadImage();
    handleClose();
  };

  useEffect(() => {
    getFoods();
  }, []);

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
          onClick={handleOpen}
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
      <Grid container spacing={3} sx={{ gap: "20px" }}>
        {foods?.map((food: any) => (
          <FoodCard food={food} />
        ))}
      </Grid>

      <FoodModal
        open={open}
        // newFood={newFood}
        handleChange={handleFoodForm}
        handleFileChange={handleFile}
        handleSave={handleSave}
        // openFilter={openFilter}
        // handleCloseFilter={handleCloseFilter}
        handleClose={handleClose}
        isLoading={isLoading}
      ></FoodModal>
    </Container>
  );
}
