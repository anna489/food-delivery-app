import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";
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
