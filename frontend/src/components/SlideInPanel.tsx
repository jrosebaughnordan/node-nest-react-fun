import { useState } from "react";
import { Drawer, Button, Box, Typography } from "@mui/material";
import type { JSX } from "react";

export interface SlidePanelProps {
  buttonLabel: string;
  anchor: "left" | "right" | "top" | "bottom";
}

export function SlidePanel(props: SlidePanelProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      {/* Button to open panel */}
      <Button variant="contained" onClick={() => setOpen(true)}>
        {props.buttonLabel}
      </Button>

      {/* Slide-in panel */}
      <Drawer anchor={props.anchor} open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 300, padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Slide-in Panel
          </Typography>
          <Typography>
            You can put forms, filters, menus, or anything here.
          </Typography>
          <Button
            sx={{ mt: 2 }}
            variant="outlined"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
