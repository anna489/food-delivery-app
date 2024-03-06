"use client";

import { Link, createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  spacing: 4,
  palette: {
    mode: "light",
    primary: {
      main: "#18BA51",
    },
    secondary: {
      main: "#000000",
    },
  },
});

export const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#18BA51",
  borderColor: "#",
  color: "white",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#18BA51",
    borderColor: "#18AA51",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0DA744",
    borderColor: "#0DA744",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba( 13, 167, 68)",
  },
});

export const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "white",
  backgroundColor: "#18BA51",
  "&:hover": {
    backgroundColor: "#18AA52",
  },
}));

export const ColorLink = styled(Link)<ButtonProps>(({ theme }) => ({
  color: "black",
  display: "flex",
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: 700,
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    color: "#18BA51",
  },
  "&:active": {
    boxShadow: "none",
    borderColor: "#0DA744",
    color: "#18BA51",
  },
}));
