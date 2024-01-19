import React from "react";
import { Stack, Box, Typography, Chip } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";

const Card = () => {
  return (
    <Box
      sx={{
        // height: "400px",
        width: "400px",
        border: "2px",
        borderColor: "black",
      }}
    >
      <ImageListItem>
        <Stack>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            style={{ borderRadius: "20px", position: "relative" }}
          />
        </Stack>
        <Stack>
          <Typography
            sx={{ fontWeight: 700, fontSize: "25px", marginTop: "10px" }}
          >
            Өглөөний хоол
          </Typography>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "20px",

              color: "#18BA51",
            }}
          >
            4800₮
          </Typography>
        </Stack>
      </ImageListItem>
      <ImageListItem>
        <Stack>
          <img
            src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            style={{ borderRadius: "20px" }}
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
            label="-20%"
          />
        </Stack>
        <Stack>
          <Typography
            sx={{ fontWeight: 700, fontSize: "25px", marginTop: "10px" }}
          >
            Өглөөний хоол
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "20px",

              color: "#18BA51",
            }}
          >
            4800₮
            <span
              style={{
                color: "black",
                textDecoration: "line-through",
                fontWeight: 500,
                marginLeft: "20px",
              }}
            >
              2800₮
            </span>
          </Typography>
        </Stack>
      </ImageListItem>
    </Box>
  );
};

export default Card;
