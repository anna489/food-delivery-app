"use client";

import React, { useContext } from "react";
import { Box, Stack, Typography, Container, Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { Input } from "@/components/core/Input";
import { Button } from "@/components/core/Button";
import { UserContext } from "@/context/UserProvider";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .max(100, "")
    .required("И-мэйл хаягыг заавал оруулна уу")
    .email("")
    .matches(/^w+[+.w-]*@([w-]+.)*w+[w-]*.([a-z]{2,4}|d+)$/i, "nott"),
  password: yup
    .string()
    .required("Нууц үгээ  заавал оруулна уу")
    .min(6, "at least should be 6 alphabet")
    .matches(/^[a-z0-9_-]{6,18}$/, "missing period"),
});

const LoginPage = () => {
  const { user, login } = useContext(UserContext);

  const formik = useFormik({
    onSubmit: ({ email, password }) => {
      console.log(email);
      console.log(password);
    },
    initialValues: { email: user.email, password: user.password },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

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
        <Input
          label="Имэйл хаягаа оруулна уу"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          errorText={formik.errors.email}
        />
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input
            name="password"
            label="Нууц үг"
            value={formik.values.password}
            showPassword
            errorText={formik.errors.password}
            onChange={formik.handleChange}
          />
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
          <Button label={"Нэвтрэх"} onClick={formik.handleSubmit} />
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
