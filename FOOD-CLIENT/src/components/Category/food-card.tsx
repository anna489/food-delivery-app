import { Box, Card, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";

const FoodCard = ({ food }: any) => {
  const { image, name, createdAt, isSale, _id, description } = food;
  const renderTitle = (
    <Link
      color="inherit"
      variant="subtitle2"
      underline="hover"
      sx={{
        overflow: "hidden",
        WebkitLineClamp: 2,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        fontSize: "25px",
      }}
    >
      {name}
    </Link>
  );
  const renderDesc = (
    <Typography
      color="inherit"
      variant="body2"
      sx={{
        height: 44,
        overflow: "hidden",
        WebkitLineClamp: 2,
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
      }}
    >
      {description}
    </Typography>
  );

  const renderCover = (
    <Box
      component="img"
      alt={name}
      src={image}
      sx={{
        top: 0,
        width: 1,
        height: 1,
        objectFit: "cover",
        position: "absolute",
      }}
    />
  );

  const renderDate = (
    <Typography
      variant="caption"
      component="div"
      sx={{
        mb: 2,
        color: "text.disabled",
      }}
    >
      {createdAt}
    </Typography>
  );
  const renderPrice = (
    <Typography variant="subtitle1">
      <Typography
        component="span"
        variant="body1"
        sx={{
          color: "red",
          textDecoration: "line-through",
        }}
      >
        {isSale && isSale}
      </Typography>
      &nbsp;
      {isSale}
    </Typography>
  );
  return (
    <Grid xs={12} sm={6} md={3}>
      <Card sx={{ width: "350px" }}>
        <Box
          sx={{
            position: "relative",
            pt: "calc(100% * 3 / 4)",
          }}
        >
          {renderCover}
          {renderPrice}
        </Box>
        <Box
          sx={{
            p: (theme) => theme.spacing(4, 3, 3, 3),
          }}
        >
          {renderDate}
          {renderTitle}
          <Stack direction="row" justifyContent="space-between">
            {renderDesc}
          </Stack>
        </Box>
      </Card>
    </Grid>
  );
};

export default FoodCard;
