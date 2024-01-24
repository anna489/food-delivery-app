import React from "react";
import {
  ImageListItem,
  Stack,
  Chip,
  Typography,
  Box,
  Container,
  Link,
  Grid,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
    <Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "55%",
          marginTop: "100px",
        }}
      >
        <Grid sx={{ display: "flex", alignItems: "center" }}>
          <StarIcon sx={{ color: "#18BA51 ", height: "25px", width: "25px" }} />
          <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
             Хямдралтай
          </Typography>
        </Grid>

        <Link underline="none" sx={{ alignItems: "center", display: "flex" }}>
          Бүгдийг харах <KeyboardArrowRightIcon />
        </Link>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
          marginTop: "30px",
        }}
      >
        {saleFood.map((e) => {
          return (
            <ImageListItem>
              <Stack>
                <img
                  src={e.img}
                  style={{
                    borderRadius: "20px",
                    width: "300px",
                    height: "200px",
                  }}
                />
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
          );
        })}
      </Grid>
    </Grid>
  );
};

export default Sale;
