"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#0070FF",
          fontFamily: "Roboto, sans-serif",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#151515",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#0070FF",
          height: "0.5rem",
          width: "3rem",
          borderRadius: "10px",
        },
      },
    },
  },
});

export default theme;
