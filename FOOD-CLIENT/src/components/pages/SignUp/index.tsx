"use client";

import React from "react";
import { Stack, Box, Typography, Container, Link } from "@mui/material";
import { Input } from "@/components/core/Input";
import { Button } from "@/components/core/Button";
import { useRouter } from "next/navigation";

type Props = {};

const SignUpPage = (props: Props) => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          padding: "5rem 0",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Бүртгүүлэх
        </Typography>
        <Input label="Нэрээ оруулна уу" name="Нэр " />
        <Input label="И-мэйл хаягаа оруулна уу" name="Нэр " />
        <Input label="Нэрээ оруулна уу" name="И-мэйл " />
        <Input label="Та хаягаа оруулна уу" name="Нэр " />
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input label="Нууц үгээ оруулна уу" showPassword />
          <Input label="Нууц үгээ оруулна уу" showPassword />
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label={"Бүртгүүлэх"} onClick={handleLoginClick} />
          <Typography
            sx={{ padding: "30px", display: "flex", justifyContent: "center" }}
          >
            Эсвэл
          </Typography>
          <Button label={"Нэвтрэх  "} onClick={handleLoginClick} />
        </Stack>
      </Box>
    </Container>
  );
};

export default SignUpPage;
