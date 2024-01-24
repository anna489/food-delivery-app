import React from "react";
import {
  ImageListItem,
  Stack,
  Chip,
  Typography,
  Box,
  Container,
} from "@mui/material";

const Sale = () => {
  const saleFood = [
    {
      name: "Breakfast",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      percent: "20%",
      baseprice: "28000₮",
      saleprice: "20000₮",
    },
    {
      name: "Breakfast",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      percent: "20%",
      baseprice: "28000₮",
      saleprice: "20000₮",
    },
    {
      name: "Breakfast",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      percent: "20%",
      baseprice: "28000₮",
      saleprice: "20000₮",
    },
    {
      name: "Breakfast",
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      percent: "20%",
      baseprice: "28000₮",
      saleprice: "20000₮",
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
                <Chip
                  sx={{
                    position: "absolute",
                    bgcolor: "#18BA51",
                    right: 8,
                    top: 8,
                    color: "white",
                    fontWeight: 700,
                    borderRadius: "20px",
                    fontSize: "20px",
                  }}
                  label={e.percent}
                />
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
                  <span
                    style={{
                      color: "black",
                      textDecoration: "line-through",
                      fontWeight: 500,
                      marginLeft: "20px",
                    }}
                  >
                    {e.saleprice}
                  </span>
                </Typography>
              </Stack>
            </ImageListItem>
          </Box>
        );
      })}
    </Stack>
  );
};

export default Sale;
