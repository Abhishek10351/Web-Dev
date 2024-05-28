import { useState } from "react";

export default function SignupForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const updateFirstName = (evt) => {
        setFirstName(evt.target.value);
    };
    const updateLastName = (evt) => {
        setLastName(evt.target.value);
    };

    return (
        <>
            <input
                type="text"
                value={firstName}
                onInput={updateFirstName}
                id="firstName"
            />
            <label htmlFor="#firstName">First Name</label>
            <br />
            <input
                type="text"
                value={lastName}
                onInput={updateLastName}
                id="lastName"
            />
            <label htmlFor="#lastName">Last Name</label>
            <br />
            <button>Sign Up</button>
        </>
    );
}
