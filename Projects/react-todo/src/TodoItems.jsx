import List from "@mui/material/List";
import { useState, useEffect } from "react";
import Todo from "./Todo";
export default function TodoItems({ initialTodos }) {
    const [todos, setTodos] = useState(initialTodos);
    const handleToggle = (value) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return todo.id === value
                    ? { ...todo, completed: !todo.completed }
                    : todo;
            })
        );
    };
    const deleteTodo = (value) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== value));
    };

    return (
        <List
            sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
            }}
        >
            {todos.map((todo) => {
                const labelId = `checkbox-list-label-${todo.id}`;

                return (
                    <Todo
                        key={todo.id}
                        value={todo}
                        handleToggle={handleToggle}
                        deleteTodo={deleteTodo}
                    />
                );
            })}
        </List>
    );
}
