import { useState } from "react";
import { Input } from "@mui/material";
import { Edit } from "@mui/icons-material";
export default function NewTodo({ addTodo }) {
    const [todo, setTodo] = useState("");
    const input_sx = {
        width: "100%",
        p: 1,
        fontSize: "16px",
        color: "black",
        border: "3px solid #eee",
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo) {
            addTodo(todo);
            setTodo("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                sx={input_sx}
                type="text"
                value={todo}
                placeholder="New item"
                onChange={(e) => setTodo(e.target.value)}
                endAdornment={<Edit />}
            />
        </form>
    );
}
