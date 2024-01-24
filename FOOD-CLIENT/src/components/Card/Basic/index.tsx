import React from "react";
import {
  ImageListItem,
  Stack,
  Chip,
  Typography,
  Box,
  Container,
} from "@mui/material";

const Basic = () => {
  const saleFood = [
    {
      name: "Breakfast",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",

      baseprice: "28000₮",
    },
    {
      name: "Breakfast",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",

      baseprice: "28000₮",
    },
    {
      name: "Breakfast",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",

      baseprice: "28000₮",
    },
    {
      name: "Breakfast",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",

      baseprice: "28000₮",
    },
  ];

  return (
    <Stack>
      {saleFood.map((e) => {
        return (
          <Box sx={{ display: "flex" }}>
            <ImageListItem sx={{ width: "350px" }}>
              <Stack>
                <img src={e.img} style={{ borderRadius: "20px" }} />
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "25px",
                    marginTop: "10px",
                  }}
                >
                  {e.name}
                </Typography>

                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: "20px",

                    color: "#18BA51",
                  }}
                >
                  {e.baseprice}
                </Typography>
              </Stack>
            </ImageListItem>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Basic;
