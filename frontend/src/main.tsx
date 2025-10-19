import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

const el = document.getElementById("root");
if (!el) throw new Error("#root not found"); // temp guard

createRoot(el).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
