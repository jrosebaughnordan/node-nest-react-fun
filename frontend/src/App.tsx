import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Todos } from "./pages/Todos";

export function App() {
  return (
    <>
      {/* Simple Nav Bar */}
      <nav style={{ padding: 16, background: "#eee" }}>
        <Link to="/" style={{ marginRight: 16 }}>
          Home
        </Link>
        <Link to="/todos">Todos</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  );
}
