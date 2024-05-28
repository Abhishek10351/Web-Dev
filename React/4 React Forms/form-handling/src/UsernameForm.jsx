import { useState } from "react";
export default function UsernameForm() {
    const [username, setUsername] = useState("");
    const updateUsername = (evt) => {
        setUsername(evt.target.value);
    };
    // - we use htmlFor instead of "for" for labels
    return (
        <>
            <input
                type="text"
                placeholder="username"
                id="user"
                value={username}
                onInput={updateUsername}
            />
            <label htmlFor="#user">Enter Username</label>
        </>
    );
}
