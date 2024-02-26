import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const CategoryButton = ({ category }: any) => {
  return (
    <Box>
      <Button
        sx={{
          color: "white",
          bgcolor: "#18BA51",
          height: "40px",
          width: "150px",
        }}
      >
        {category.name}
      </Button>
    </Box>
  );
};

export default CategoryButton;
