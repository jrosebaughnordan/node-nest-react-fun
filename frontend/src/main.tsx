import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme";

const el = document.getElementById("root");
if (!el) throw new Error("#root not found"); // temp guard

createRoot(el).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
