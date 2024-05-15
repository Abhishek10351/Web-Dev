import "./Shopping.css";

function ShoppingItem({ item, quantity, completed }) {
    return (
        <li
            className="shopping-item"
            style={{
                textDecoration: completed
                    ? "line-through slategrey"
                    : "none",
                color: completed ? "slategrey" : null,
            }}
        >
            {item}-{quantity}
        </li>
    );
}

function ShoppingList({ items }) {
    let list_items = items.map((item) => (
        <ShoppingItem key={item.id} {...item} />
    ));
    return (
        <>
            <h1 className="shopping-list-header">Shopping Items</h1>
            <ul className="shopping-list">{list_items}</ul>
        </>
    );
}

export { ShoppingList, ShoppingItem };
