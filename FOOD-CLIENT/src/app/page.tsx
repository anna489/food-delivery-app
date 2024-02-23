"use client";
import * as React from "react";
import { Stack, Typography, Box, Container, Grid } from "@mui/material";
import { Category } from "@/components/Category";
import FoodView from "@/components/FoodView";

export default function Home() {
  return (
    <Stack>
      <FoodView />
      <Category />
    </Stack>
  );
}
