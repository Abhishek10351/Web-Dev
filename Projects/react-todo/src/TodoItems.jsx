import List from "@mui/material/List";
import { useState, useEffect } from "react";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import NewTodo from "./NewTodo";

export default function TodoItems({ initialTodos }) {
    const [todos, setTodos] = useState(initialTodos);
    const handleToggle = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo;
            })
        );
    };
    const deleteTodo = (value) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== value));
    };

    const addTodo = (todo) => {
        const newTodo = {
            id: uuid(),
            title: todo,
            completed: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    return (
        <>
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
            <NewTodo addTodo={addTodo} />
        </>
    );
}
