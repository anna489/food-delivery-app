"use client";

import * as React from "react";
import { Box, Stack, Typography, Container, Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { Input } from "@/components/core/Input";
import { Button } from "@/components/core/Button";

const LoginPage = () => {
  const router = useRouter();
  const handleSignUpClick = () => {
    router.push("/signup");
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
          Нэвтрэх
        </Typography>
        <Input label="Имэйл хаягаа оруулна уу" name="Имэйл " />
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input label="Нууц үг" showPassword />
          <Link
            href="/pass-restore"
            underline="none"
            sx={{
              fontSize: "18px",
              color: "black",
              justifyContent: "end",
              display: "flex",
            }}
          >
            Нууц үг сэргээх
          </Link>
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label={"Нэвтрэх"} onClick={handleSignUpClick} />
          <Typography
            sx={{ padding: "30px", display: "flex", justifyContent: "center" }}
          >
            Эсвэл
          </Typography>
          <Button label={"Бүртгүүлэх"} onClick={handleSignUpClick} />
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;
