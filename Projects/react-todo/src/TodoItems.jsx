import List from "@mui/material/List";
import { useState, useEffect } from "react";
import Todo from "./Todo";
import NewTodo from "./NewTodo";
import Box from "@mui/material/Box";
const getLocalTodos = () => {
    let todos = localStorage.getItem("todos");
    if (todos) {
        return JSON.parse(localStorage.getItem("todos"));
    } else {
        return [];
    }
}
export default function TodoItems() {
    const [todos, setTodos] = useState(getLocalTodos);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
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
            id: crypto.randomUUID(),
            title: todo,
            completed: false,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
            }}
        >
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
        </Box>
    );
}
