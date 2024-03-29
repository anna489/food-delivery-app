"use client";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { fCurrency } from "@/utils/format-number";
import Label from "@/components/label";
import { ColorPreview } from "@/components/color-utils";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { useContext, useState } from "react";
import { foodContext } from "@/context/foodProvider";
import { Grid } from "@mui/material";
import { fDate } from "@/utils/format-time";

// ----------------------------------------------------------------------

export default function FoodCard({ food }: any) {
  const { image, name, createdAt, isSale, _id, description } = food;
  console.log("FOOD", food);
  const { deleteFood } = useContext(foodContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
      {fDate(createdAt)}
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
        {isSale && fCurrency(isSale)}
      </Typography>
      &nbsp;
      {fCurrency(isSale)}
    </Typography>
  );

  return (
    <Grid xs={12} sm={6} md={3} sx={{ width: "300px" }}>
      <Card>
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

            <div onClick={handleClick}>
              <MoreVertIcon />
            </div>
          </Stack>
        </Box>
      </Card>
      <Popover
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            deleteFood(_id);
          }}
          sx={{ color: "error.main" }}
        >
          <DeleteForeverOutlinedIcon />
          Delete
        </MenuItem>
      </Popover>
    </Grid>
  );
}
