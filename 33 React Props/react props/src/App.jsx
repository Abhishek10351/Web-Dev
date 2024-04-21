import Greeter from "./Greeter";
import Die from "./Die";
import DoubleDice from "./DoubleDice";
import ListPicker from "./ListPicker";
import Heading from "./Heading";
import ColorList from "./ColorList";
import Slots from "./Slots";
import "./App.css";
function getRandomNum(num = 5) {
    return Math.floor(Math.random() * num);
}
function randFruits() {
    let fruits = ["🍉", "🍇", "🍎", "🍌", "🍒" ];
    return {
        val1: fruits[getRandomNum()],
        val2: fruits[getRandomNum()],
        val3: fruits[getRandomNum()],
    };
}
function App() {
    console.log(randFruits());
    return (
        <>
            <Slots {...randFruits()} />
            <Slots {...randFruits()} />
            <Slots {...randFruits()} />
        </>
    );
}

export default App;
