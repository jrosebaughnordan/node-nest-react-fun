import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Todos } from "./pages/Todos";
import { Sliders } from "./pages/Sliders";

export function App() {
  return (
    <>
      {/* Simple Nav Bar */}
      <nav style={{ padding: 16, background: "#eee" }}>
        <Link to="/" style={{ marginRight: 16 }}>
          Home
        </Link>
        <Link to="/todos" style={{ marginRight: 16 }}>
          Todos
        </Link>
        <Link to="/sliders">Sliders</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/sliders" element={<Sliders />} />
      </Routes>
    </>
  );
}
