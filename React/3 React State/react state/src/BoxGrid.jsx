import "./BoxGrid.css";
import Box from "./Box";
const colors = ["blueviolet", "crimson", "cyan", "darkviolet", "crimson", "firebrick", "orange", "purple", "yellow", "slateblue", "coral", "cornflowerblue", "orangered", "red", "blue", "gray", "gold", "indigo", "magenta", "maroon","orchid", "salmon", "silver",  "tomato", "violet", "wheat"];

export default function BoxGrid() {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<Box key={i} colors={colors} />);
    }

    return <div className="box-grid">{boxes}</div>;
}
