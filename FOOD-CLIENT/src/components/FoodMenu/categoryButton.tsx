import { BootstrapButton, ColorButton } from "@/theme/theme";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const CategoryButton = ({ category }: any) => {
  return (
    <Box>
      <BootstrapButton
        sx={{
          color: "white",
          bgcolor: "#18BA51",
          height: "40px",
          width: "150px",
        }}
      >
        {category.name}
      </BootstrapButton>
    </Box>
  );
};

export default CategoryButton;
