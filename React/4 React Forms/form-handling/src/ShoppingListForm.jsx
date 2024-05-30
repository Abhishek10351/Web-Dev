import { useState } from "react";
export default function ShoppingListForm({ addItem }) {
    const [formData, setFormData] = useState({ product: "", quantity: 0 });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.product && formData.quantity) {
            addItem(formData);
            console.log("Form submitted with data:", formData);
            setFormData({ product: "", quantity: 0 });
        }
    };

    return (
        <form>
            <h2>
                Product is {formData["product"]} and quantity is{" "}
                {formData["quantity"]}
            </h2>
            {/* an input for product */}
            <label htmlFor="product">Product:</label>
            <input
                type="text"
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
            />
            <br />
            {/* an input for quantity */}
            <label htmlFor="quantity">Quantity:</label>
            <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="1"
                value={formData.quantity}
                onChange={handleChange}
                min={1}
            />
            <br />
            {/* a submit button */}
            <button type="submit" onClick={handleSubmit}>
                Add to Shopping List
            </button>
        </form>
    );
}
