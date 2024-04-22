import "./App.css";
import { ShoppingItem, ShoppingList } from "./ShoppingList";
const items = [
    {
        id: 1,
        item: "Milk",
        quantity: 1,
        completed: false,
    },
    {
        id: 2,
        item: "Bread",
        quantity: 2,
        completed: false,
    },
    {
        id: 3,
        item: "Eggs",
        quantity: 12,
        completed: false,
    },
    {
        id: 4,
        item: "Cheese",
        quantity: 3,
        completed: false,
    },
    {
        id: 5,
        item: "Meat",
        quantity: 1,
        completed: true,
    },
];
function App() {
    return (
        <>
            <ShoppingList items={items} />
        </>
    );
}

export default App;
