import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FoodModal from "../FoodModal";

const FoodCard = ({ food }: any) => {
  const { image, name, isSale, price } = food;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderTitle = (
    <Link
      underline="none"
      sx={{
        display: "-webkit-box",
        fontWeight: "bold",
        fontSize: "30px",
        color: "black",
      }}
    >
      {name}
    </Link>
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
        borderRadius: "20px",
      }}
    />
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

  const renderCost = (
    <Typography
      sx={{
        color: "#18BA51",
        fontSize: "23px",
        fontWeight: 600,
      }}
    >
      {price}₮
    </Typography>
  );
  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }}>
      <Card
        sx={{
          width: "350px",
          boxShadow: "unset",
          borderRadius: "20px",
        }}
        onClick={() => handleOpen()}
      >
        <CardActionArea>
          <Box
            sx={{
              position: "relative",
              pt: "calc(100% * 3 / 4)",
            }}
          >
            {renderCover}
          </Box>
          <Box
            sx={{
              p: (theme) => theme.spacing(4, 3, 3, 3),
            }}
          >
            {renderTitle}
            <Stack>{renderCost}</Stack>
          </Box>
        </CardActionArea>
      </Card>
      {open && <FoodModal open={open} handleClose={handleClose} food={food} />}
    </Grid>
  );
};

export default FoodCard;
