// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" }, // blue
    secondary: { main: "#9c27b0" }, // purple
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#1976d2", // make ALL icons blue by default
          transition: "color 0.2s ease",
          "&:hover": {
            color: "#42a5f5", // lighter blue on hover
          },
        },
      },
    },
  },
});

export default theme;
