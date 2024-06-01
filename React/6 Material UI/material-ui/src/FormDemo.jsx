import { TextField, Slider, Box } from "@mui/material";
import { useState } from "react";

export default function FormDemo() {
    const [name, setName] = useState("");
    const [volume, setVolume] = useState(0);
    const box_sx = {
        border: "1px solid black",
        p: 20
    };
    return (
        <Box sx={box_sx}>
            <TextField
                label="Name"
                value={name}
                placeholder="Jerry"
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
            />
            <h2>Volume: {volume}</h2>
            <Slider
                value={volume}
                onChange={(e, value) => setVolume(value)}
                min={0}
                max={100}
                step={1}
            />
            {/* <p>Hello, {name}</p> */}
        </Box>
    );
}
