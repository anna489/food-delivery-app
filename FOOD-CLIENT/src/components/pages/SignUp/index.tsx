"use client";

import React, { useContext } from "react";
import { Stack, Box, Typography, Container, Link } from "@mui/material";
import { Input } from "@/components/core/Input";
import { Button } from "@/components/core/Button";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "@/context/UserProvider";

const validationSchema = yup.object({
  name: yup.string().min(5, "at least should be 6 alphabet"),
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
  rePassword: yup
    .string()
    .required("Нууц үгээ  заавал оруулна уу")
    .oneOf([yup.ref("password isn't matching")])
    .matches(/^[a-z0-9_-]{6,18}$/, "missing period"),
});

const SignUpPage = () => {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/login");
  };

  const { user, login } = useContext(UserContext);

  const formik = useFormik({
    onSubmit: ({ email, password, address, name, rePassword }) => {
      console.log(name);
      console.log(email);
      console.log(password);
      console.log(address);
      console.log(rePassword);
    },
    initialValues: {
      name: user.name,
      email: user.email,
      password: user.password,
      address: user.address,
      rePassword: user.rePassword,
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
  });

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
        <Input
          label="Нэрээ оруулна уу"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          errorText={formik.errors.name}
        />
        <Input
          label="И-мэйл хаягаа оруулна уу"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          errorText={formik.errors.email}
        />
        <Input
          label="Та хаягаа оруулна уу"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          errorText={formik.errors.address}
        />
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input
            label="Нууц үгээ оруулна уу"
            name="password"
            showPassword
            value={formik.values.password}
            onChange={formik.handleChange}
            errorText={formik.errors.password}
          />
          <Input
            label="Нууц үгээ оруулна уу"
            name="rePassword"
            showPassword
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            errorText={formik.errors.rePassword}
          />
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label={"Бүртгүүлэх"} onClick={formik.handleSubmit}></Button>
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
