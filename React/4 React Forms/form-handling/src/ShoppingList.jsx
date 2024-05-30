import { useState } from "react";
import { v4 as uuid } from "uuid";

import ShoppingListForm from "./ShoppingListForm";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
export default function ShoppingList() {
    const [items, setItems] = useState([
        { id: uuid(), product: "Milk", quantity: 1 },
        { id: uuid(), product: "Bread", quantity: 2 },
    ]);

    const addItem = (item) => {
        setItems([...items, { ...item, id: uuid() }]);
    };
    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.product} - {item.quantity}
                    </li>
                ))}
            </ul>
            <ValidatedShoppingListForm addItem={addItem} />
        </div>
    );
}
