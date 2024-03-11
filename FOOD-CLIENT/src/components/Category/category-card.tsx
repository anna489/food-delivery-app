import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import FoodCard from "./food-card";
import { foodContext } from "@/context/foodProvider";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CategoryCard = ({ category }: any) => {
  const { foods, getFoods } = useContext(foodContext);

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            padding: "40px",
          }}
        >
          <AutoAwesomeRoundedIcon sx={{ color: "#18BA51 " }} />
          {category.name}
        </Typography>
        <Button
          // underline="none"
          sx={{ alignItems: "center", display: "flex", fontSize: "15px" }}
        >
          Бүгдийг харах <KeyboardArrowRightIcon />
        </Button>
      </Box>
      <Swiper
        className="mySwiper"
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {foods
          ?.filter((food: any) => food.category === category._id)
          ?.map((food: any) => (
            <SwiperSlide key={food.category._id}>
              <FoodCard food={food} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
};

export default CategoryCard;
