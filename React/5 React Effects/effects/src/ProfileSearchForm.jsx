import { useState } from 'react';

export default function ProfileSearchForm({search}) {
    const [username, setUsername] = useState("");

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        search(username);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" onChange={updateUsername} value={username} />
            </div>
        </form>
    )

}