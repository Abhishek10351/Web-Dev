import { useState } from "react";
import "./App.css";
import Toggler from "./Toggler";
import BoxGrid from "./BoxGrid";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import ScoreKeeper from "./ScoreKeeper";
import EmojiClicker from "./EmojiClicker";
import UltimateScoreKeeper from "./UltimateScoreKeeper";

function App() {
    return (
        <>
            <UltimateScoreKeeper numPlayers={5} target={3} />
        </>
    );
}

export default App;
