import ShoppingListForm from "./ShoppingListForm";
import { useState } from "react";
export default function ValidatedShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });
    const [productIsValid, setProductIsValid] = useState(false);
    const validate = (product) => {
        if (product.trim() === "") {
            setProductIsValid(false);
        } else {
            setProductIsValid(true);
        }
    };
    const handleChange = (evt) => {
        if (evt.target.name === "product") {
            validate(evt.target.value);
        }
        setFormData((currData) => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.product + "--");

        if (productIsValid) {
            addItem(formData);
            setFormData({ product: "", quantity: 0 });
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="product">Product Name</label>
            <input
                type="text"
                placeholder="product name"
                name="product"
                id="product"
                onChange={handleChange}
                value={formData.product}
            />

            {!productIsValid && (
                <p style={{ color: "red" }}>Please enter a product name</p>
            )}
            <label htmlFor="quantity">Quantity</label>
            <input
                type="number"
                placeholder="1"
                name="quantity"
                id="quantity"
                onChange={handleChange}
                min={1}
                value={formData.quantity}
            />
            <button disabled={!productIsValid}>Add Item</button>
        </form>
    );
}
