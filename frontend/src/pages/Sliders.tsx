// src/pages/Todos.tsx
import { useEffect, useState } from "react";
import { SlidePanel } from "../components/SlideInPanel";

export function Sliders() {
  //const [rightSlideActive, setRightSlideActive] = useState(false);
  //const [bottomSlideActive, setBottomSlideActive] = useState(false);

  return (
    <div style={{ padding: 24 }}>
      <h1>Slider Page</h1>
      <div
        style={{ justifyContent: "center", display: "flex", marginBottom: 16 }}
      >
        <SlidePanel buttonLabel="Right Slide In" anchor="right" />
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <SlidePanel buttonLabel="Bottom Slide In" anchor="bottom" />
      </div>
    </div>
  );
}
