import { useEffect, useState } from "react";
import { SlidePanel } from "../components/SlideInPanel";
import { Grid, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import FlashOn from "@mui/icons-material/FlashOn";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import Security from "@mui/icons-material/Security";
import Whatshot from "@mui/icons-material/Whatshot";

export function Sliders() {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    let count = 0;
    const id = setInterval(() => {
      setShowIcons((prev) => !prev); // toggle
      count += 1;
      if (count >= 6) clearInterval(id); // stop after 6 toggles
    }, 1000); // 1s between toggles

    return () => clearInterval(id); // cleanup on unmount
  }, []);

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

      <div
        style={{
          display: showIcons ? "grid" : "none",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <HomeIcon />
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <FlashOn sx={{ color: "gold" }} />
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <StarIcon />
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <RocketLaunch />
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <Whatshot />
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        >
          <Security />
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setShowIcons(!showIcons)}>
          Toggle Icons/Grid
        </button>
      </div>
    </div>
  );
}
