import { useState } from "react";

export default function BetterSignupForm() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "" });
    const handleChange = (evt) => {
        const target = evt.target.name;
        const newVal = evt.target.value;
        setFormData((oldFormData) => {
            // oldFormData[target] = newVal;
            // return { ...oldFormData };
            return { ...oldFormData, [target]: newVal };
            // [a]: b is used in a object to get the value of a and not the literal name of a

        });
    };
    return (
        <>
            <label htmlFor="#firstName">First Name</label>
            <input
                name="firstName"
                value={formData.firstName}
                placeholder="First Name"
                id="firstName"
                onChange={handleChange}
            />
            <br />
            <label htmlFor="#lastName">Last Name</label>
            <input
                name="lastName"
                value={formData.lastName}
                placeholder="Last Name"
                id="lastName"
                onChange={handleChange}
            />
            <br />
            <button>Sign Up</button>
        </>
    );
}
